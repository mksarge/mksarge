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

###### KiCASS in action at Bang! Festival, May 2016 [source][entropy]

<hr>

### Background

#### UBC Laptop Orchestra

The UBC Laptop Orchestra is an interdisciplinary student ensemble at UBC whose works
are a fusion of experimental music, dance, visual art, and technology. The students
compose and perform a variety of electroacoustic pieces that incorporate motion tracking
technology and programmed audio/video processes with traditional instruments.
[Read more][laptop]

<br>

#### KiCASS

The Kinect-Controlled Artistic Sensing System (KiCASS) is a system that was developed
for the UBC Laptop Orchestra's use in the 2015-2016 school year and beyond. It was
developed as an

[ECE Capstone][capstone] project under [UBC MAGIC][magic] director Dr. Sidney Fels, and
UBC Laptop Orchestra directors Bob Pritchard and Keith Hammel.

<br>

#### Capstone Team Members

* Isaac Cheng
* Russil Glover
* Kelsey Hawley
* Kevin Hui
* Michael Sargent

<img src="/kicass-team.png" />

###### KiCASS Engineers at UBC.<br>Left to right: Russil, Kevin, Isaac, Kelsey, Michael. [source][team]

<hr>

### Problem

#### Microsoft Kinect v2

We were tasked to develop a system that would allow the Laptop Orchestra to
track their dancers using the [Microsoft Kinect v2][kinect]'s camera and infrared
skeletal tracking system.

<br>

#### Max/MSP Compatibility

One of the requirements of the system was that it had to have the ability to stream
the tracked skeletal data to [Max/MSP][max], the de-facto audio interface used by the
Laptop Orchestra. This data would be used to manipulate the performance audio in real time.

<hr>

### Solution

#### High-Level Architecture

<img src="/kicass-architecture.png" />

###### A topographical representation of the final design. [source][architecture]

The final design was a system composed of 3 parts: the Kinect sensor, a Windows desktop
program, and a Max/MSP patch. The following sub-sections examine the 3 components in more detail.

<br>

#### Kinect Sensor + Performer

All of the performances developed with KiCASS feature a dancer as the main focal point
of the performance visual. Notably,  

<br>

#### KiCASS - Desktop Client

We built a C# WPF desktop program for Windows (8+, due to hardware requirements), that
acts as the middleman between the Kinect sensor and the Max/MSP program. This program
receives the raw sensor data from the Kinect's USB 3.0 connection, filters and packages
it as [OSC packets][osc], and sends it to the Max/MSP program over UDP.

<img src="/kicass-desktop.png" />

###### The KiCASS desktop program displays a skeleton and "hand-state" overlay. [source][desktop]

<br>

#### KiCASS - Max/MSP Patch

A patch for Max/MSP was written to act as a receiver for the data sent from the desktop
client. This patch also allows users to specify the data needed to be sent. For example,
one performance might use the motion-tracked position of the dancers right and left hands,
while another piece might use all 25 of the available joints.

<img src="/patch.png" />

###### The KiCASS Max patch allows users to specify the requested joints. [source][patch]

<hr>

### Notable Performances

#### Electric Spring (Feb 2016)

[Electric Spring][electric] is a festival held at the University of Huddersfield in England.
In February 2016, the UBC Laptop Orchestra and KiCASS team travelled to participate at Electric
Spring. Our lineup included two performances that used KiCASS.  

<img src="/stars.gif" />

###### UBC Laptop Orchestra at Electric Spring, Feb 2016. [source][architecture]

#### Bang! Festival (Apr 2016)

Bang! is an annual end-of-year UBC music festival feauturing the best of the UBC Laptop
Orchestra's past year of works. KiCASS was featured extensively in the performances.

<iframe height="400px" src="https://www.youtube.com/embed/prreQxDbnaA?rel=0" frameborder="0" allowfullscreen></iframe>

###### "Entropy" performed at Bang! Festival, May 2016. [source][entropy]

<hr>

### Links

[GitHub][github] [Blog][impart] [Media][laptop] [YouTube][youtube]

[bang]: <https://ubcimpart.wordpress.com/2016/04/08/bang-festival-and-call-for-dancers/>
[entropy]: <https://www.youtube.com/watch?v=prreQxDbnaA>
[laptop]: <http://music.ubc.ca/student-ensembles/laptop-orchestra/>
[capstone]: <https://www.ece.ubc.ca/courses/capstones>
[magic]: <http://www.magic.ubc.ca/>
[team]: <https://ubcimpart.wordpress.com/2015/11/04/introducing-the-kstamp-team/>
[kinect]: <https://developer.microsoft.com/en-us/windows/kinect>
[max]: <https://cycling74.com/products/max/>
[osc]: <https://en.wikipedia.org/wiki/Open_Sound_Control>
[architecture]: <>
[electric]: <http://www.electricspring.co.uk/index.html>
[github]: <https://github.com/nbzzzz/kicass>
[impart]: <https://ubcimpart.wordpress.com>
[youtube]: <https://www.youtube.com/channel/UCd5zkwu5AqcUnwof-PyhRnA>
[patch]: <https://github.com/nbzzzz/KiCASS#using-the-patch>
[desktop]: <https://github.com/nbzzzz/KiCASS#using-kicass-desktop>

