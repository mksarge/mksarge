---
title: Michael Sargent | Fine Scrubbing
---

# Fine Scrubbing

## Bringing iOS-style "fine scrubbing" to HTML5 video

##### HTML

##### JavaScript

##### Human Computer Interaction

##### Usability

##### Accessibility

<hr>

<img src="/vimeo-player.png" style="max-width: calc(100% - 20px);" />

###### Vimeo's HTML5 Video Player [(source)][vimeo-player]

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

#### Usability

Usability is described in [ISO 9241][iso] as the effectiveness, efficiency and
satisfaction with which specified users achieve specified goals in particular
environments. Usable design refers to the consideration of usability in the design
and implementation of a user interface. 

<br>

#### Scrubbing

Scrubbing is the act of dragging the progress indicator on a audio or video player's progress
bar forward or back. [Wikipedia][scrubbing]

<br>

#### Progress Indicator

<img src="/youtube-progress-indicator.png" style="max-width: calc(100% - 20px);" />

###### YouTube's progress indicator is a small circle that appears when hovering over the progress bar.

<br>

A progress indicator is a visual component of a progress bar that indicates the current
time of the video. It often takes the form of a circle, such as the one on seen in the above
image. With the help of JavaScript or CSS magic, it can provide helpful visual feedback to
improve the usability of video scrubbing.

<br>

Some video players do not use a dedicated progress indicator, opting to simply mark
the progress of the video with a different color (eg. Vimeo's[blue progress bar][vimeo-player]). 

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

#### Vimeo (desktop-web) &#9733;&#9734;&#9734;

<img src="/vimeo-bar.png" style="max-width: calc(100% - 20px);" />

###### A preview frame is shown when hovering over Vimeo's progress bar.

[Vimeo's][vimeo] desktop web player is beautiful, but when it comes to the progress
bar, there is little innovation beyond the basic scrubbing and preview frame functionality.

<br>

When hovering over the progress bar, a preview frame is shown at the position of the mouse.
This is a basic feature used for conveying information about the point in a video that
the mouse is hovering over, without needing to click and go to that spot in the video.

<br>

#### YouTube (desktop-web) &#9733;&#9733;&#9734;

<img src="/youtube-bar.png" style="max-width: calc(100% - 20px);" />

###### A preview frame and it's neighbouring frames are shown when hovering over YouTube's progress bar.

[YouTube's][youtube] desktop web player includes a similar preview capability to Vimeo's
player, but with a chain of preview frames spanning the width of the video.

<br>

This feature allows the user to get a sense what is happening, not just at the time
hovered over by the mouse, but also in the neighbouring frames. Unfortunately, the design
is not very intuitive; it is not immediately obvious what the other function these preview
frames serve. Can these frames be clicked or otherwise interacted with? I will leave this
for the readers to try for themselves. 

<br>

#### Apple iOS (native) &#9733;&#9733;&#9733;

<iframe style ="width: calc(100% - 20px)" height="300px" src="https://www.youtube.com/embed/CPp7gLQnCW8?rel=0" frameborder="0" allowfullscreen></iframe>

###### iOS "fine scrubbing" explained.

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
[iso]: <https://www.w3.org/2002/Talks/0104-usabilityprocess/slide3-0.html>
[vimeo]: <https://vimeo.com>
[youtube]: <https://youtube.com>
[youtube-desktop]: <https://www.youtube.com/?app=desktop&persist_app=1>
[ios]: <https://developer.apple.com/ios/human-interface-guidelines/>
[ios-scrubbing]: <https://www.youtube.com/watch?v=CPp7gLQnCW8>
[sliders]: <https://developer.apple.com/ios/human-interface-guidelines/ui-controls/sliders/>
[twitch]: <https://itunes.apple.com/ca/app/twitch/id460177396>
[vimeo-github]: <https://github.com/vimeo/player.js>
[github]: <https://github.com/mksarge/fine-scrubbing>
