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

<img src="/entropy.gif" />

###### KiCASS in action at UBC Bang! Festival 2016. [source][entropy]

<hr>

### Background

#### UBC Laptop Orchestra

The [UBC Laptop Orchestra][laptop] (also known as [IMPART][impart]) is an
interdisciplinary student ensemble at UBC whose works are a fusion of experimental
music, dance, visual art, and technology. The students compose and perform a variety
of electroacoustic pieces that incorporate motion tracking technology and programmed
audio/video processes with traditional instruments.

<br>

#### ECE Capstone

KiCASS (Kinect-Controlled Artistic Sensing System) was developed for the UBC
Laptop Orchestra's use in the 2015-2016 school year and beyond. It was completed as an
[ECE&nbsp;Capstone][capstone] project under the supervision of UBC [MAGIC][magic] director
Sidney Fels and UBC Laptop Orchestra director Bob Pritchard.

<br>

#### KiCASS Team

A [team introduction][team] can be found on the IMPART blog. Team members:

<br>

* Isaac Cheng
* Russil Glover
* Kelsey Hawley
* Kevin Hui
* Michael Sargent

<br>



<hr>

### Requirements

#### Microsoft Kinect v2

The [Kinect for Windows][kinect] is capable of tracking up to 6 people and 25
skeletal joints per person. Our system was required to make use of the Kinect's
capabilities to track at least 1 dancer.

<br>

#### Max/MSP

[Max][max] is a visual programming software used by the UBC Laptop Orchestra to produce
their pieces, and MSP is a Max extension that allows for the manipulation of digital
audio signals in real time. Our system was required to stream motion data from the Kinect
to multiple Max/MSP clients simultaneously.

<hr>

### Solution

#### High-Level Architecture

Our final design was a system consisting of 3 major components:

<br>

* the Kinect sensor
* a Windows desktop program
* one or more Max/MSP clients running a custom KiCASS patch.

<br>

The following sub-sections describe the components in more detail.

<br>

<img src="/kicass-architecture.png" />

###### A topographical representation of the final design.

<br>

#### Kinect v2 Sensor

The Kinect sensor captures and streams the dancer's [25&nbsp;tracked&nbsp;joints][joints] and
[hand&nbsp;state][handstate] (open, closed, etc.) to the KiCASS desktop program.

<br>

#### Desktop program 

The KiCASS desktop program is a C# WPF desktop application for Windows that acts as
the middleman between the Kinect sensor and the Max/MSP patch. The program receives
the raw sensor data from the Kinect's through a USB 3.0 connection, then filters,
packages as [OSC][osc], and transmits it through UDP.

<br>

<img src="/kicass-desktop.png" />

###### The KiCASS desktop program displays the tracked skeleton and hand state overlay.

<br>

#### Max/MSP Patch

The KiCASS Max/MSP patch allows a remote Max client to receive the OSC data stream
from the KiCASS desktop program. Different instances of Max running the KiCASS patch can
choose to receive data from different sets of joints. For example, one Max user might
request the position of all 25 joints, while another user might request only the position
of the dancer's head, as well as the right and left hand state. 

<br>

<img src="/patch.png" />

###### The KiCASS Max/MSP patch interface includes a 2-D visualization of the selected joints.

<hr>

### Notable Performances

#### Electric Spring, February 2016

[Electric&nbsp;Spring][electric] is an annual festival of "sonic exploration" held at
the University of Huddersfield in England. The UBC Laptop Orchestra and KiCASS team
travelled to participate at Electric Spring in February 2016, with a lineup including
multiple performances featuring KiCASS.  

<br>

#### Bang! Festival, April 2016

[Bang!][bang] is an annual end-of-year music festival held at UBC. Our team gave
a presentation on the research and development of KiCASS in the past year, and
the UBC Laptop Orchestra performed several pieces featuring KiCASS.

<br>

<img src="/stars.gif" />

###### KiCASS in action at Electric Spring 2016 in Huddersfield, England.

<hr>

### Links

[GitHub][github] [Blog][impart] [Media][laptop] [YouTube][youtube]

[entropy]: <https://www.youtube.com/watch?v=prreQxDbnaA>
[laptop]: <http://music.ubc.ca/student-ensembles/laptop-orchestra/>
[capstone]: <https://www.ece.ubc.ca/courses/capstones>
[magic]: <http://www.magic.ubc.ca/>
[team]: <https://ubcimpart.wordpress.com/2015/11/04/introducing-the-kstamp-team/>
[kinect]: <https://developer.microsoft.com/en-us/windows/kinect/develop>
[max]: <https://cycling74.com/products/max/>
[joints]: <https://msdn.microsoft.com/en-us/library/microsoft.kinect.jointtype.aspx>
[handstate]: <https://msdn.microsoft.com/en-us/library/dn799273.aspx>
[osc]: <https://en.wikipedia.org/wiki/Open_Sound_Control>
[electric]: <http://www.electricspring.co.uk/index.html>
[github]: <https://github.com/nbzzzz/kicass>
[impart]: <https://ubcimpart.wordpress.com>
[youtube]: <https://www.youtube.com/channel/UCd5zkwu5AqcUnwof-PyhRnA>
[patch]: <https://github.com/nbzzzz/KiCASS#using-the-patch>
[desktop]: <https://github.com/nbzzzz/KiCASS#using-kicass-desktop>
[bang]: <https://ubcimpart.wordpress.com/2016/04/08/bang-festival-and-call-for-dancers/>
