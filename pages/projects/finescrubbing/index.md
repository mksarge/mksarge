---
title: Michael Sargent | Fine Scrubbing
---

# Fine Scrubbing

## iOS-style "fine scrubbing" for html video

##### HTML

##### JavaScript

##### Human Computer Interaction

##### Usability

##### Accessibility

<hr>

<img src="/vimeo-player.png" style="max-width: calc(100% - 20px);" />

###### Vimeo HTML5 Player [source&nbsp;][vimeo]

<hr>

### Background

Video players are ubiquitous on the internet. Companies who dominate the internet
audio / video space, like YouTube, Vimeo, and Netflix, each have their own proprietary
players for use across their websites and apps.

<br>

Though the look and design may vary by company, most video players have these basic
controls:

* play / pause button
* progress bar
* volume bar
* fullscreen button
* video resolution control
* etc.

Eg. [Vimeo player][vimeo] 

<hr>

### Goals

The goals of this project are:

* to examine existing designs of the progress bar in popular video players
* to find potential areas of improvement, with emphasis on usable design
* to create working prototypes to showcase those improvements. 

<hr>

### Problem

#### Scrubbing

Scrubbing is the act of dragging the indicator on a audio/video player's progress
bar forward or back. [Wikipedia][scrubbing]

#### Usability

Usability is described as the effectiveness, efficiency and satisfaction with which
specified users achieve specified goals in particular environments [ISO 9241][iso]. 
Usable design refers to the consideration of usability in the design and implementation
of a user interface. 

#### Progress Bars

In my regular use of the internet, I found that the designs of progress bars on
popular video sites lack innovation and the consideration of usability. Notably,
it often hard or impossible to scrub to an exact time - precise to 1 second - when
viewing a long (eg. 1 hour) video.

<hr>

### Notable Solutions

I've only encountered two platforms with progress bars featuring anything more than
basic scrubbing capabilities: [YouTube][youtube] (desktop site) and [Apple iOS][ios] (native video
player API).

#### YouTube

YouTube's desktop web player.

#### iOS

The most thoughtful example I've come across is in Apple's "fine scrubbing" design for iOS devices.
[Here](https://www.youtube.com/watch?v=slEYBlw6pCs) is a demo of that feature, implemented in the
default music application.

<br>

iOS fine scrubbing is a modern and well-designed solution for the accessibility problem discussed
above, and I view it a tragedy that no similar or inspired designs are used on other popular
platforms.

<hr> 

### Future Work

* develop a working demo of iOS-style fine scrubbing for html video
* develop more designs for progress bar scrubbing, with usability as a priority

<hr> 

### Links

[GitHub][github]

[vimeo]: <https://developer.vimeo.com/player>
[scrubbing]: <https://en.wikipedia.org/wiki/Scrubbing_(audio)>
[iso]: <https://www.w3.org/2002/Talks/0104-usabilityprocess/slide3-0.html>
[youtube]: <https://youtube.com>
[ios]: <https://developer.apple.com/ios/human-interface-guidelines/>
[sliders]: <https://developer.apple.com/ios/human-interface-guidelines/ui-controls/sliders/>
[github]: <https://github.com/mksarge/fine-scrubbing>
