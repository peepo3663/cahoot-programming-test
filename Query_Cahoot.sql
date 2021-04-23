USE StackOverflow;

--- Write an SQL query to find the count of questions and answers in the entire database by the Day of the week (e.g. Monday, Tuesday) 
--- ordered by the upvote to downvote ratio in descending order
--- Post type (Question or Answer), Day of the week (Sunday, Monday etc.), Total Posts, Total Upvotes, Total Downvotes and Upvotes to Downvotes ratio
WITH StackOv
AS(
SELECT PostTypes.[Type] as Post_Type, DATENAME(dw, Posts.CreationDate) as DoW, COUNT(*) as Total_Posts, COUNT(case when VoteTypes.Name = 'UpMod' THEN 1 ELSE NULL END) as Total_Upvotes, COUNT(case when VoteTypes.Name = 'DownMod' THEN 1 ELSE NULL END) as Total_Downvotes FROM Posts
JOIN PostTypes on PostTypes.Id = Posts.PostTypeId
JOIN Votes on Votes.PostId = Posts.Id
JOIN VoteTypes on VoteTypes.Id = Votes.VoteTypeId
where PostTypes.Type = 'Answer' or PostTypes.Type = 'Question'
GROUP by PostTypes.[Type], DATENAME(dw, Posts.CreationDate)
)
select Post_Type, DoW, Total_Posts, Total_Upvotes, Total_Downvotes, (Total_Upvotes*1.0/Total_Downvotes*1.0) as Votes_ratio
from StackOv
order by Votes_ratio desc;

--- Write an SQL query to calculate and list the aggregate weekly data as follows for all the weeks in the database in the reverse chronological order. 
--- The list should contain the first date of the week, Count of questions, Count of answers, Count of accepted answers, Count of votes, 
--- Total number of new users and active users in that given week
WITH WEEK_DATA
AS (
    SELECT 
    DATEADD(week, DATEDIFF(week, -1, Posts.CreationDate), -1) AS first_date_of_the_week,
    DATEADD(week, DATEDIFF(week, -2, Posts.CreationDate), -2) AS last_date_of_the_week,
    COUNT(case when PostTypes.[Type] = 'Question' then 1 else null end) as questions_count, 
    COUNT(case when PostTypes.[Type] = 'Answer' then 1 else null end) as answers_count, 
    COUNT(case when Posts.AcceptedAnswerId != 0 then 1 else null end) as accepted_answers_count, 
    COUNT(case when Votes.UserId is not null then 1 else null end) as votes_count
FROM Posts
JOIN PostTypes on PostTypes.Id = Posts.PostTypeId
JOIN Votes on Posts.Id = Votes.PostId
GROUP BY DATEADD(week, DATEDIFF(week, -1, Posts.CreationDate), -1), DATEADD(week, DATEDIFF(week, -2, Posts.CreationDate), -2)
)
select WEEK_DATA.*, COUNT(case when Users.LastAccessDate Between first_date_of_the_week AND last_date_of_the_week then 1 else null end) as number_of_active_users from WEEK_DATA, Users
GROUP BY first_date_of_the_week, last_date_of_the_week, questions_count, answers_count, accepted_answers_count, votes_count
order by first_date_of_the_week desc;