---
title: Michael Sargent | Fine Scrubbing
---

# Fine Scrubbing

## iOS-style "fine scrubbing" for web video

<hr>

<img src="/vimeo-player.png" style="max-width: calc(100% - 20px);" />

###### Vimeo HTML5 Player ([source][vimeo])

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

This project looks at existing designs of the progress bar UI on popular video players 
from a usability standpoint, with the goal of finding potential areas of improvement
and creating prototypes for those improvements. 

<hr>

### Usability

Usability is described as the effectiveness, efficiency and satisfaction with which
specified users achieve specified goals in particular environments ([ISO 9241][iso]).

<br>

In this case,

When it comes to "scrubbing" - the act of scolling the audio/video progress bars forward or back,
the consideration of accessible design can be a huge deal.

<hr>

### Existing Solutions

In my experience, the progress bar the video player control that is least subject to
innovation.

<br>

Popular video players often have custom and unique UI designs for controls such as the
volume bar, resolution / settings button, and general video overlay; but there has not
been much innovation in modern implementations of progress bars, with one exception:
Apple's iOS native audio/video player API.

<hr>

### Apple iOS - fine scrubbing

The most thoughtful example I've come across is in Apple's "fine scrubbing" design for iOS devices.
[Here](https://www.youtube.com/watch?v=slEYBlw6pCs) is a demo of that feature, implemented in the
default music application.

<br>

iOS fine scrubbing is a modern and well-designed solution for the accessibility problem discussed
above, and I view it a tragedy that no similar or inspired designs can be found on other popular
platforms!

<hr> 

### Future Work

I aim to

* develop a working demo, implementing iOS-style fine scrubbing to html video  
* implement iOS-style "fine scrubbing" on html video, with initial focus on desktop/mouse
* research/create different designs for different scenarios (phone/tablet/desktop; touchscreen/touchpad/mouse)

<hr> 

### Links

[GitHub][github]

[vimeo]: <https://developer.vimeo.com/player>
[iso]: <https://www.w3.org/2002/Talks/0104-usabilityprocess/slide3-0.html>
[github]: <https://github.com/mksarge/fine-scrubbing>
