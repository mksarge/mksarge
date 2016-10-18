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

###### Vimeo HTML5 Player [source&nbsp;][vimeo-player]

<hr>

### Overview

The goals of this project are:

<br>

#### Research

* to examine existing designs of the progress bar in popular video players; and
* to document the user experience of video scrubbing in these players.

<br>

#### Development

* to find potential areas of improvement in the implementation of the progress bar; and
* to create working prototypes to showcase those improvements
* with an emphasis on usable design.

<hr>

### Background

#### Video Players

Video players are ubiquitous on the internet. Companies that dominate the internet
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

<hr>

### Terminology

#### Scrubbing

Scrubbing is the act of dragging the progress indicator on a audio or video player's progress
bar forward or back. [Wikipedia][scrubbing]

<br>

#### Progress Indicator

<img src="/youtube-progress-indicator.png" style="max-width: calc(100% - 20px);" />

###### [YouTube's][youtube] progress indicator is a small circle that appears when hovering over the progress bar.

<br>

<br>

A progress indicator is a visual component of a progress bar that indicates the
current time of the video. Not every video player design includes has a
dedicated progress indicator (eg. [Vimeo][vimeo-player]).   

<br>

#### Usability

Usability is described in [ISO 9241][iso] as the effectiveness, efficiency and
satisfaction with which specified users achieve specified goals in particular
environments. Usable design refers to the consideration of usability in the design
and implementation of a user interface. 

<hr>

### Problem

In my regular use of the internet, I found that the designs of progress bars on
popular video sites lack innovation and the consideration of usability.

<br>

#### Notable problems:

* It is often hard or impossible to scrub to an exact time - precise to 1 second - when
viewing a long (eg. 1 hour) video.
* Once video scrubbing has been initiated (ie. the user has started dragging the progress
indicator), there is often no way to cancel the action and return to the original time. 

<br>

These problems become even more pronounced when considering the mobile-web video players;
but the initial focus of this project is on usage with a desktop and mouse.

<hr>

### Notable Solutions

#### Vimeo (web - desktop) &#9733;&#9734;&#9734;

<img src="/vimeo-bar.png" style="max-width: calc(100% - 20px);" />

[Vimeo's][vimeo] desktop web player is beautiful, but when it comes to the progress
bar, there is little innovation beyond the basic scrubbing capability.

<br>

When hovering over the progress bar, a preview frame is shown

<br>

#### YouTube (web - desktop) &#9733;&#9733;&#9734;

<img src="/youtube-bar.png" style="max-width: calc(100% - 20px);" />

[YouTube's][youtube] desktop web player includes a similar preview capability to Vimeo's
player, but with a chain of preview frames spanning the length of the video.

<br>

This feature allows the user to get a sense what is happening, not just in the time hovered
over by the mouse, but also in the neighbouring frames. Unfortunately, the design
seems does not seem intuitive; it is not immediately obvious what the chain of preview
frames are for.

<br>

Can these other frames be clicked? What happens if you hover over a neighbouring frame?
These questions are left to the user to find out for themselves. 

<br>

#### Apple iOS (mobile - native) &#9733;&#9733;&#9733;

<br>

<iframe style ="width: calc(100% - 20px)" height="300px" src="https://www.youtube.com/embed/CPp7gLQnCW8?rel=0" frameborder="0" allowfullscreen></iframe>

<br>

The iOS design used for their [native app API][ios] is well-implemented
and modern solution to the problem of fine scrubbing. The feature is implemented
in default applications, and is also available as an API for 3rd-party apps.

<br>

#### iOS apps using fine scrubbing:

* default apps (eg. Music, Videos)
* 3rd-party video and music players
* video streaming apps (eg. [Twitch][twitch])

<br>

The thoughtful design shows Apple's [commitment to quality design][ios], and I view it
a tragedy that no similar or inspired designs are used on other popular platforms.

<hr> 

### Future Work

#### Develop:

* a working demo of iOS-style fine scrubbing for html video
* more complex / inspired designs for progress bar scrubbing

<hr> 

### Links

[GitHub][github]

[vimeo-player]: <https://developer.vimeo.com/player>
[scrubbing]: <https://en.wikipedia.org/wiki/Scrubbing_(audio)>
[iso]: <https://www.w3.org/2002/Talks/0104-usabilityprocess/slide3-0.html>
[vimeo]: <https://vimeo.com>
[youtube]: <https://youtube.com>
[ios]: <https://developer.apple.com/ios/human-interface-guidelines/>
[ios-scrubbing]: <https://www.youtube.com/watch?v=CPp7gLQnCW8>
[sliders]: <https://developer.apple.com/ios/human-interface-guidelines/ui-controls/sliders/>
[twitch]: <https://itunes.apple.com/ca/app/twitch/id460177396>
[github]: <https://github.com/mksarge/fine-scrubbing>
