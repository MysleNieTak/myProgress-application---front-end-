# myProgress - Integration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

### Introduction
The application is used to register your sport activities, plan your goals and monitor your health progress.

### Features
- JPA,
- Spring Boot,
- MySQL,
- REST API.

The application allows the user to:
- add new activity
- delete the activity
- edit the activity <i> (name, distance, time and userName of particular activity) - still in progress :) </i>
- list all activities
<hr>
In near future, the application will have few <b>additional functionalities! </b>

- <b>activities data manipulation</b><i> - filtering and sorting (search for...) </i>
- <b>challenge creator</b> <i>- user provides the goal to achieve (e.g. the kcal to burn) and the application
  prepares a dedicated training plan!</i>
- <b>notifications </b> <i>- application notifies after each goal achieved, 100 km run etc.</i>
- <b> followers </b> <i>- users may follow other users and see their activities, goals achieved and... the progress! </i>
- <b>results</b> <i> - a wide general results calculation of the users progress will be available soon! What are the planned results to be shown? Average kcal burnt
  / kilometers run / meters swam  - per day / goal / etc. </i>
- <b>account settings </b> <i>- users account will contain the important information regarding user age, weight, BMI. The data is very important and impacts the training plan. </i>
### Logo
Logo represents the fastest animal in the world in the middle of progress circle - <i> a cheetah.</i>
### How to configure and run
Provide the parameters to connect with the database.
Parameters are located in `/src/main/resources/application.yaml`.
The following must be filled:

```yaml
spring:
  datasource:
    url: jdbc:mysql:// #fill connection string url 
    password: #fill password
    username: #fill username
  jpa:
    hibernate:
      ddl-auto: update
```
To run the application, please use the following command:
```shell
mvn spring-boot:run
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


### Authors
Paulina Pionk
