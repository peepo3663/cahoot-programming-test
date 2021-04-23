# Cahoot Interview Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.
This project is for cahoot Software Developer Test - interview

## Assumptions

This code is based on the backend (NodeJS) with already setup SQL Server and imported StackOverFlow data as [described here](https://sqlblog.org/2020/03/15/attaching-restoring-databases-inside-a-container) and [here](https://www.sentryone.com/blog/aaronbertrand/vs-code-mac-sql-linux-docker)
* Already setup SQL Server with StackOverflow database (Running on the localhost port 1433)
* Used default SA user with setup password (In my case, password is `#myPassword123`)
* SQL Query answers is in the project as SQL files.

## Features
* search posts and return results like StackOverflow.com search results page
* Implement a simple site search to allow the users to search posts (questions and answers)
* present the most relevant results, 10 results per page
* This page should support progressive loading
* Each result should display the Post Title, maximum of 140 characters from the Description, Total # of Votes, Total # of Answers and the User who asked the question along with their reputation score and badges

## SQL Querys
* Answers to the SQL Querys (Number 2,3) are in [this file](Query_Cahoot.sql)

## Development server

* Install all dependencies in all Frontend (Angular) and Backend by calling 
```shell
npm install
```
in both this directory and server directory
* Install global dependency call [forever](https://www.npmjs.org/package/forever), so this will run server backend in the background.
```
npm install -g forever
```
* or you can run server and frontend separately. 
* Run 
```
npm start 
```
This will run both server and frontend.
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
