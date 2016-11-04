---
hero: "/classportal-delivs.png"
title: ClassPortal
subtitle: Course management system
tags: [JavaScript, TypeScript, React, Node.js, Restify]
---

_ClassPortal is a dynamic system for classroom management. It serves as a lightweight,
extendable, and open-source alternative to proprietary course management systems._

<br>

[[TOC]]

<hr>

### Background

#### Course / Learning Management Systems

Many universities offer a proprietary [learning management system][lms] for professors to
use alongside their courses. These systems serve as hubs for admins to update - and students
to access - the course material, student grades, discussions, and more. Popular content
management systems like [WordPress][wordpress] are also commonly used in these settings.
However, these systems are often bulky, hard to navigate, or hard to extend with extra
functionality.

<br>

#### UBC Computer Science

ClassPortal was originally conceived by UBC Computer Science prof [Dr. Reid Holmes][reid]
with the goal of creating a minimalist course management system that is fast, lightweight,
and easy to extend.

<br>

ClassPortal is the result of a collaboration between Dr. Holmes and myself as his undergraduate
assistant, and is currently [being used][skaha] in Dr. Holmes' lectures in the 2016W semester
and beyond.

<hr>

### Front End Solution

#### Overview

The ClassPortal front-end client is written in React. There are seperate interfaces for
the student portal and admin portal; users are redirected to the appropriate portal after
registration and logging in. 

<br>

Each page of ClassPortal hosts a collection of modules that carry out different functionalities,
such as a login module on the homepage, or a module to update the class list on the admin portal. 
[Elemental UI][elemental]'s React UI toolkit was used extensively in this process.

<br>

#### Routing

[React Router][router] is used to handle URL routing in ClassPortal. Routes are restricted
depending on the user's status as an admin or student, and whether they are logged in or not.

<br>

#### GitHub API

One of the core feature of ClassPortal is integration with GitHub. Upon registration, each
student associates their student info with their GitHub username and authorizes ClassPortal
for basic read priviledges through the [GitHub API][github-api].

<br>

This also means that ClassPortal does not need to use a first-party login system; instead,
[GitHub OAuth 2.0][github-oauth] is used to log the registered users in.

<br>

<img src="/github-auth.png" />

###### GitHub OAuth 2.0 is used to log users into ClassPortal.

<br>


#### Core Functionality

Common modules:
* Registration
* Login
* Logout

<br>

Student portal modules:

* CreateTeam (submit teammate names for team creation)
* DisplayTeam (display team data: teammate names, GitHub usernames, etc)
* Deliverables (view assignments and grades / comments)

<br>

Admin portal modules: 

* AdminTeams (view all teams and associated data; assign grades for entire teams)
* AdminStudents (view all students and associated data; assign grades for individual students)
* AdminDeliverables (view all / upload new deliverables)
* CreateTeam (create or disband teams)
* CreateProject (create GitHub repos for teams)
* UploadClasslist (upload new .csv classlist; update student database)

<br>

<img src="/classportal-delivs.png" />

###### The student portal has a user/logout module, team module, and deliverables module.

<hr>

### Back End

#### Node.js + TypeScript

The server back-end is written in TypeScript and runs on Node.js.

<br>

#### REST API with Restify

[Restify][restify] is a Node.js module and framework for building REST APIs. It is used
in ClassPortal to build the REST API. Restify supports connect-style middleware chaining.

<br>

#### REST Authentication

Token-based authentication is used to implement the REST API.

<hr> 

### Future Work

#### Modules

More modules

<br>

#### React + ES6

React

<hr> 

### Links

[GitHub][github] [UBC CPSC 310 ClassPortal][skaha] [UBC CPSC 310 GitHub][skaha] 

[reid]: <https://www.cs.ubc.ca/people/reid-holmes>
[cpsc310]: <https://github.com/ubccpsc/310/tree/2016sept>
[lms]: <https://en.wikipedia.org/wiki/Learning_management_system>
[wordpress]: <https://wordpress.com/>
[drupal]: <https://www.drupal.org/>
[elemental]: <http://elemental-ui.com/>
[router]: <https://github.com/ReactTraining/react-router>
[github-api]: <https://developer.github.com/v3/>
[github-oauth]: <https://developer.github.com/v3/oauth/>
[restify]: <http://restify.com/>
[github]: <https://github.com/ubccpsc/classportal/>
[skaha]: <http://skaha.cs.ubc.ca:8020>
