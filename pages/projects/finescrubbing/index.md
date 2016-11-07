---
hero: /vimeo-player.png
title: FineScrubbing
subtitle: iOS-style fine scrubbing for desktop video
tags: [HTML5, JavaScript, Human Computer Interaction, Usability, Accessibility]
---

_The goal of FineScrubbing is to produce innovative and accessible designs for the modern
desktop video player's progress bar._

<br>

[[TOC]]

<hr>

### Project Goals

#### Research

* to examine existing designs of the progress bar in popular video players
* to document the user experience of video scrubbing in those players

<br>

#### Development

* to design improvements to the progress bar, with an emphasis on usable design 
* to develop working prototypes to showcase those improvements

<hr>

### Background

#### Video Player

Video players are ubiquitous on the internet. Companies that dominate the internet
audio / video space, like YouTube, Vimeo, and Netflix, all have proprietary players
that are used across their own websites and apps.

<br>

Though the look and design may vary by company, most video players provide similar
capabilities through these standard controls:

<br>

* play / pause button
* progress bar
* volume bar
* full screen button
* video resolution / settings control

<br>

#### Progress Bar

<img src="/youtube-progress-indicator.png" />

###### YouTube's progress bar indicates the elapsed time with a contrasting colour and circular indicator.

<br>

A progress bar is the graphical control element used to indicate the time and progress of the
video being played. Most progress bars use different colours to indicate the elapsed time
of the video. Some designs also include an extra visual cue, such as the small circle
seen in YouTube's player (above).

<br>

#### Scrubbing

Scrubbing is the act of dragging the progress indicator on an audio/video player's progress
bar, in order to move the current playing time forward/backward. [Wikipedia][scrubbing]

<br>

#### Accessibility and Usability

Accessibility refers to "the inclusive practice of removing barriers that prevent
interaction with, or access to websites, by people with disabilities".
[Wikipedia][access]

<br>

Usability is described as the "effectiveness, efficiency and satisfaction with which
specified users achieve specified goals in particular environments. [ISO 9241][iso]

<hr>

### Problem

In my regular use of the internet, I found that the designs of progress bars on popular
video sites lack the consideration of accessibility and usability in several regards.

<br>

#### Notable Problems

General Usability:

* It is often hard or impossible to scrub to an exact time - precise to 1 second - when
viewing a long (eg. 1 hour) video.
* Once video scrubbing has been initiated (ie. the user has started dragging the progress
indicator), there is often no way to cancel the action and return to the previous spot
in the video. 

<br>

Accessibility:

* It can be hard for a user with poor mobility to mouse over and click/drag a small
progress indicator.

<br>

#### Mobile Web Players

These problems become even more pronounced when considering the mobile-web video players,
but the initial focus of this project is on usage with a desktop and mouse.

<hr>

### Notable Solutions

#### Vimeo (desktop site) &#9733;&#9734;&#9734;

<img src="/vimeo-bar.png" />

###### A preview frame is shown when hovering over Vimeo's progress bar.

[Vimeo's][vimeo] desktop web player is beautiful, but when it comes to the progress
bar, there is little innovation beyond the basic scrubbing and preview frame functionality.

<br>

When hovering over the progress bar, a preview frame is shown at the position of the mouse.
This is a basic feature used for conveying information about the point in a video that
the mouse is hovering over, without needing to click and go to that spot in the video.

<br>

#### YouTube (desktop site) &#9733;&#9733;&#9734;

<img src="/youtube-bar.png" />

###### A preview frame and it's neighbouring frames are shown when hovering over YouTube's progress bar.

[YouTube's][youtube] desktop web player includes a similar preview capability to Vimeo's
player, but with a chain of preview frames spanning the width of the video.

<br>

This feature allows the user to get a sense of what is happening - not just at the time
hovered over by the mouse, but also in the neighbouring frames. Unfortunately, the design
is not very intuitive; it is not immediately obvious what the other function these preview
frames serve. Can these frames be clicked or otherwise interacted with? I will leave this
for the readers to try for themselves. 

<br>

#### Apple iOS (native applications) &#9733;&#9733;&#9733;

<iframe style ="width: calc(100% - 20px)" height="300px" src="https://www.youtube.com/embed/CPp7gLQnCW8?rel=0" frameborder="0" allowfullscreen></iframe>

###### iOS "fine scrubbing" explained. [source][finescrubbing]

<br>

The iOS fine scrubbing design is a well-implemented and modern solution to the problem of
fine scrubbing on devices with touchscreens. The feature is implemented in default
applications, and is available as a [native API][ios] for 3rd-party apps.

<br>

#### iOS apps using fine scrubbing:

* default apps (eg. iOS Music, Videos)
* 3rd-party video and music players
* video streaming apps (eg. [Twitch][twitch])

<br>

iOS fine scrubbing is a great example of usable design, and I am surprised that no
similar or inspired designs have been brought to other popular video platforms. This
innovative solution serves as the inspiration for my goal of bringing similar designs
to the web. 

<hr> 

### Future Work

#### Research

Vimeo has an open source video player API, [player.js][vimeo-github], that may be useful to
help kickstart the development of my designs.

<br>

#### Develop:

* a working demo of iOS-style fine scrubbing for html video
* more complex / inspired designs for progress bar scrubbing

<hr> 

### Links

[GitHub][github] [Vimeo API][vimeo-player]

[vimeo-player]: <https://developer.vimeo.com/player>
[scrubbing]: <https://en.wikipedia.org/wiki/Scrubbing_(audio)>
[access]: <https://en.wikipedia.org/wiki/Web_accessibility>
[iso]: <https://www.w3.org/2002/Talks/0104-usabilityprocess/slide3-0.html>
[vimeo]: <https://vimeo.com>
[youtube]: <https://youtube.com>
[ios]: <https://developer.apple.com/ios/human-interface-guidelines/>
[finescrubbing]: <https://www.youtube.com/watch?v=CPp7gLQnCW8>
[twitch]: <https://itunes.apple.com/ca/app/twitch/id460177396>
[vimeo-github]: <https://github.com/vimeo/player.js>
[github]: <https://github.com/mksarge/fine-scrubbing>
