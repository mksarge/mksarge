---
title: Michael Sargent | KiCASS
---

# KiCASS

## Kinect-Controlled Artistic Sensing System

##### C# / WPF

##### Max / MSP

##### Kinect v2

##### Human Computer Interaction

##### Interactive Art

<hr>

<img src="/entropy.gif" style="width: calc(100% - 20px);" />

###### KiCASS in action at [UBC Bang!][bang] Festival, May 2016. [(source)][entropy]

<hr>

### Background

#### UBC Laptop Orchestra

The [UBC Laptop Orchestra][laptop] is a multidisciplinary music group consisting of
UBC music students, dancers, coders, and more. They strive to produce innovative
audio-art performances and installations with a wide range of technology and push
the boundaries of music and technology.

<br>

#### KiCASS

KiCASS was developed as a final year project for the 2015-2016 [ECE Capstone][capstone]
course, in collaboration with the Laptop Orchestra.

<img src="/kicass-team.png" style="width: calc(100% - 20px);" />

###### KiCASS Engineers at UBC.<br>Left to right: Russil Glover, Kevin Hui, Isaac Cheng, Kelsey Hawley, Michael Sargent. [(source)][team]

<hr>

### Problem

We were tasked to develop a system that would allow the Laptop Orchestra to
track their dancers using the [Microsoft Kinect v2][kinect]'s camera and infrared
skeletal tracking system.

<br>

This system was to stream the requested joint data to a [Max/MSP][max] client program for
the real-time manipulation of music/audio tracks.

<hr>

### Solution

#### High-Level Architecture

<img src="/kicass-architecture.png" style="width: calc(100% - 20px);" />

###### Caption [(source)][architecture]

How it works

<br>

#### KiCASS - desktop client

We built a C#&nbsp;/&nbsp;WPF Windows (8+, due to hardware requirements) desktop program that acted as the middleman between the
Kinect and Max/MSP client. This program would receive the raw data coming from the
Kinect's USB 3.0 connection, filter the data, package it as [OSC packets][osc], and send it
to the Max client over UDP.

<br>

#### KiCASS - Max/MSP patch

A Max patch is needed to. 

<hr>

### Result

Together with the Laptop Orchestra, our Capstone group travelled to Huddersfield, England, to
participage in the [Electric Spring][electric] festival where we performed two pieces using KiCASS. 

<img src="/stars.gif" style="width: calc(100% - 20px);" />

<hr>

### Links

[GitHub][github] [IMPART Blog][impart] [Campus Publication][news] [YouTube][youtube]

[bang]: <https://ubcimpart.wordpress.com/2016/04/08/bang-festival-and-call-for-dancers/>
[entropy]: <https://www.youtube.com/watch?v=prreQxDbnaA>
[laptop]: <http://music.ubc.ca/student-ensembles/laptop-orchestra/>
[capstone]: <https://www.ece.ubc.ca/courses/capstones>
[team]: <https://ubcimpart.wordpress.com/2015/11/04/introducing-the-kstamp-team/>
[kinect]: <https://developer.microsoft.com/en-us/windows/kinect>
[max]: <https://cycling74.com/products/max/>
[osc]: <https://en.wikipedia.org/wiki/Open_Sound_Control>
[architecture]: <>
[electric]: <http://www.electricspring.co.uk/index.html>
[github]: <https://github.com/nbzzzz/kicass>
[impart]: <https://ubcimpart.wordpress.com>
[youtube]: <https://www.youtube.com/channel/UCd5zkwu5AqcUnwof-PyhRnA>
[news]: <http://ubyssey.ca/culture/laptop-make-music-too-294/>
