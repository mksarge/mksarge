---
title: Michael Sargent | KiCASS
---

# KiCASS

## Kinect-Controlled Artistic Sensing System

<br>

### Background

[The UBC Laptop Orchestra][laptop] is a multidisciplinary music group consisting of
music performance and composition students, dancers, coders, and more. 
Each year, they produce innovative audio-art installations/performances
with a wide range of technology.

<br>

KiCASS was developed in collaboration with the Laptop Orchestra by myself and
5 other students as our final year project for the 2015-2016 [ECE Capstone][capstone]
course.

<br>

### Problem

We were tasked to develop a system that would allow the Laptop Orchestra to
track their dancers using the [Microsoft Kinect v2][kinect]'s camera and infrared
skeletal tracking system.

<br>

This system was to stream the requested joint data to a [Max/MSP][max] client program for
the real-time manipulation of music/audio tracks.

<br>

### Solution

We built a C#&nbsp;/&nbsp;WPF Windows desktop program that acted as the middleman between the
Kinect and Max/MSP client. This program would receive the raw data coming from the
Kinect's USB 3.0 connection, filter the data, package it as [OSC packets][osc], and send it
to the Max client over UDP.

<br>

The Max client. 

<br>

### Result

Together with the Laptop Orchestra, our Capstone group travelled to Huddersfield, England, to
participage in the [Electric Spring][electric] festival where we performed two pieces using KiCASS. 

<br>

<iframe id="myFrame" src="https://www.youtube.com/embed/1gVW2csSEds" frameborder="0" allowfullscreen></iframe>

<br> 

<br>

### Links

[GitHub][github] | [IMPART Blog][impart] | [YouTube][youtube] | [Campus Publication][news]

[laptop]: <http://music.ubc.ca/student-ensembles/laptop-orchestra/>
[capstone]: <https://www.ece.ubc.ca/courses/capstones>
[kinect]: <https://developer.microsoft.com/en-us/windows/kinect>
[max]: <https://cycling74.com/products/max/>
[osc]: <https://en.wikipedia.org/wiki/Open_Sound_Control>
[electric]: <http://www.electricspring.co.uk/index.html>
[github]: <https://github.com/nbzzzz/kicass>
[impart]: <https://ubcimpart.wordpress.com>
[youtube]: <https://www.youtube.com/channel/UCd5zkwu5AqcUnwof-PyhRnA>
[news]: <http://ubyssey.ca/culture/laptop-make-music-too-294/>
