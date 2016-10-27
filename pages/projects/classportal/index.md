---
title: Michael Sargent | ClassPortal
---

# ClassPortal

## Course management system

##### JavaScript

##### TypeScript

##### React

##### Node.js

##### Restify

<hr>

### Overview

ClassPortal is a dynamic system for classroom management. It serves as a minimalistic and
open-source replacement for proprietary course management systems.

<br>

<img src="/classportal-delivs.png" />

###### ClassPortal is being used for the 2016W [CPSC 310][cpsc310] course at UBC.

<hr>

### Background

#### Course / Learning Management Systems

Many universities use proprietary course management systems or even open source content
management systems like WordPress or Drupal. These large systems can be bulky, hard to
navigate, or hard to personalize for courses that require extra functionality. 

<br>

ClassPortal aims to be a minimalistic course management system that is fast, lightweight,
and easy to extend. 

<br>

#### UBC Computer Science

ClassPortal was created for use with UBC prof [Dr. Reid Holmes][reid]'s courses in the
2016W semester and beyond.

<br>

#### Contributors

* Reid Holmes
* Michael Sargent

<br>

[ClassPortal on GitHub][github]

<hr>

### Solution

#### Architecture

ClassPortal consists of a website front-end built in React, and a server back-end running
on Node.js.

<br>

#### Core Functionality

Admins can:
* submit or update the classlist
* create or disband teams
* set new deliverables
* helps students register for the class
* assign / edit grades and comments
* initiate team project creation on GitHub

<br>

Students can:
* associate their GitHub and student credentials upon first login
* create their own teams
* submit documents (.pdf, .zip)
* view their grades
* view / download deliverable documents

<hr>

### Front End

Description

<br>

#### GitHub Login

A GitHub login is offered.

<br>

<img src="/github-auth.png" />

###### GitHub OAuth 2.0 is used to log in.

<br>

#### Student Portal

The student portal has few features;

<br>

#### Admin Portal

The admin portal has 3 views:

* teams view
* students view
* deliverables view

<hr>

### Back End

The server back-end is written in TypeScript
runs on Node.js
uses Restify to implement its REST APIs.

<hr>

### REST Authentication

#### asdf

asdfasf

<hr> 

### Links

[GitHub][github] [CPSC 310 Course Info][cpsc310] [CPSC 310 ClassPortal][skaha] 

[reid]: <https://www.cs.ubc.ca/people/reid-holmes>
[cpsc310]: <https://github.com/ubccpsc/310/tree/2016sept>
[github]: <https://github.com/ubccpsc/classportal/>
[skaha]: <http://skaha.cs.ubc.ca:8020>
