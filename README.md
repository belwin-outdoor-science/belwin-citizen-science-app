# Belwin Citizen Science 
The Belwin Citizen Science App is a full-stack mobile-view web application for students to record their nature observations during trips to the Belwin Conservancy. It provides an interactive tool for students to track their observations for each site, record any notes, and for staff to be able to consolidate and view current student data. Students can use the application offline for data collection in the field, when the device is connected back to the internet, students will be able to submit data collected.

### Feature List:
- Students can navigate through data gathering views while offline
- Students can enter data for all specimins on site
- Application verifies that the device is online before data can be submitted
- Staff can log in and view the data collected during the day 
- Staff can create new user accounts



### Screencaps

**Student Offline Navigation**

![Student Offline Navigation](http://res.cloudinary.com/jdshow/image/upload/v1508899140/student_offline_nav_ejckfl.png)

**Student Data Entry**

![Student Data Entry](http://res.cloudinary.com/jdshow/image/upload/v1508899509/student_data_view_ppcmnp.png)

**Online Verification**

![Online Verification](http://res.cloudinary.com/jdshow/image/upload/v1508899141/app_offline_q7eck9.png)

**Staff Data View**

![Staff Data View](http://res.cloudinary.com/jdshow/image/upload/v1508899075/staff_data_view_hfrpmv.png)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
To run this code, you will first need to install [Node.js](https://nodejs.org/en/)
You will also need to install Postico, or another Ui for postgreSQL.

### Installing
A step by step series of examples that tell you have to get a development env running

Clone this repository

Install Node.js

In terminal, cd into the folder where this repository is

ex:
$ cd belwin-citizen-science-app

In terminal, use 'npm install' to get all of the necessary dependencies
$ npm install

Copy queries from the data.sql file and execute queries. 

To get the code running, in terminal type 'npm start'

$ npm start

In your preferred browser, go to
localhost:5000


## Built With
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Angular](https://angularjs.org/)
* [Passport](http://passportjs.org/)
* [pSQL](https://www.postgresql.org/)

## Authors
* Brendt Bly
* Ryan Kiang
* Charly Renk
* Ami Schroeder
* Jen Show

## Acknowledgements
* Thank you to Josh and everyone at Belwin for giving us an opportunity to work on this awesome project
* Thank you to our instructors, Luke and Kris
* Thank you to our supportive cohort, Betelgeuse
