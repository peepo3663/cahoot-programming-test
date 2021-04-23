var express = require('express');
var router = express.Router();
const { Op, QueryTypes } = require('sequelize')

module.exports = function (models, sequelize) {

  router.post('/search/posts', (req, res, next) => {
    let searchQuery = req.body.searchKeyword
    let page = req.body.page || 0
    let rawQuery = `WITH USER_POSTS
AS (
SELECT [Posts].[Id], [Posts].[AcceptedAnswerId], [Posts].[AnswerCount], SUBSTRING([Posts].[Body], 1, 140) as Body, [Posts].[ClosedDate], [Posts].[CommentCount], [Posts].[CommunityOwnedDate], [Posts].[CreationDate], [Posts].[FavoriteCount], [Posts].[LastActivityDate], [Posts].[LastEditDate], [Posts].[LastEditorDisplayName], [Posts].[LastEditorUserId], [Posts].[OwnerUserId], [Posts].[ParentId], [Posts].[PostTypeId], [Posts].[Score], [Posts].[Tags], [Posts].[Title], [Posts].[ViewCount], Users.DisplayName as ownerName, Users.Id as ownerId, Users.Reputation as ownerReputation
from Posts
JOIN Users on Posts.OwnerUserId = Users.Id
WHERE (Posts.PostTypeId = 1 or Posts.PostTypeId = 2) and (Posts.Title like N'%${searchQuery}%' or Posts.Body like '%${searchQuery}%')
ORDER BY Posts.Id OFFSET ${page} ROWS FETCH NEXT 10 ROWS ONLY
)
SELECT USER_POSTS.*, (SELECT COUNT(Votes.Id) FROM Votes WHERE USER_POSTS.Id = Votes.PostId) as votesCount, STUFF((SELECT DISTINCT ',' + Badges.Name FROM Badges WHERE USER_POSTS.OwnerUserId = Badges.UserId FOR XML PATH('')), 1, 1, '') as badgesName
FROM USER_POSTS`
    sequelize.query(rawQuery, { raw: true, type: QueryTypes.SELECT }).then(posts => {
      return res.status(200).json(posts)
    }).catch(error => {
      return res.status(500).json(error)
    })
  })

  return router
};
