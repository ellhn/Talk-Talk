# Contact Manager
This task project is about showing a list of contacts, showing their full name, email and profile photo. The user has the ability
to click on each contact to see more granular details. The user should also has the ability to add new contacts.
##Some tech points
This mini project is using Angular 1.6.1 and has based its architecture on components; moreover, there is no use of ng-controller
directive. The site is fully responsive and its layout is based upon Bootstrap and SCSS. There is minor use of ES6, the unit testing 
has been done through Karma and Jasmine and the end to end testing through Protractor
##The following have to be installed in the local machine
* Git
* NodeJS
* Java
* Gulp
* Karma
* Protractor

##Installing and running

Open a git bash window and clone the Github repository to the local machine by:

$ git clone https://github.com/ellhn/Talk-Talk.git

Then 

$ cd Talk-Talk

and let Gulp do the rest...

$ gulp

##Unit Testing 
From the working directory, just run:

$ karma start

##End to end testing
From the working directory, run:

$ webdriver-manager start

as to start the Selenium server
and at the same time open a new bash window, go again to the working directory and type:

$ cd E2eTesting

$ protractor conf.js
