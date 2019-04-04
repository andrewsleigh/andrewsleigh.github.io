---
permalink: /making/lm386-amplifier/
redirect_from:
  - /lm386-amplifier/
  
id: 1623
title: LM386 Amplifier
date: 2013-11-17T16:26:07+00:00
author: Andrew
layout: page
guid: http://andrewsleigh.com/?page_id=1623
dsq_thread_id:
  - "1973898619"
---

<img class="alignnone size-full wp-image-1641" title="IMG_1013" src="/assets/2013/11/IMG_1013.jpg" alt="" />

The LM386 chip is a simple and cheap amplifier chip that is used in countless audio amplifier projects. I used one to make my own 0.5W amplifier.

<!--more-->

This is not a complete how-to guide, you can find plenty of those elsewhere. It’s just a write-up of some of the things I learned – and modifications I made – along the way.

<img class="alignnone size-full wp-image-1640" title="IMG_1010" src="/assets/2013/11/IMG_1010.jpg" alt="" />

## Instructions

I largely followed the [instructions on the Hack A Week site](http://hackaweek.com/hacks/?p=131), with a few modifications.

I added a stereo-to-mono summing circuit to convert the stereo signal from my audio source down to a mono signal for the amp. More on these circuits:

<http://www.rane.com/note109.html>
  
[http://www.psychicorigami.com/2013/04/30/a-small-monobox-speaker-lm386-amp-speaker-in-a-box/](http://www.rane.com/note109.html)

I made a few modifications to deal with interference problems from my power supply, as per [this write-up](http://lowvoltage.wordpress.com/2011/04/23/lm386-audio-amplifier/).

And I added a few extra parts, as detailed below.

## Parts

As a result of these modifications, my final parts list ended up being quite different to the standard lists for these kinds of projects.

### Resistors

From top to bottom:

  * 1 x 10 Ohm resistor (pin 5 to ground)
  * 2 x 470 Ohm resistor (for stereo summing circuit)
  * 1 x 27K Ohm resistor (for stereo summing circuit)
  * 1 x 10K Ohm resistor (for bass boost circuit)

<img class="alignnone size-full wp-image-1627" title="IMG_0968" src="/assets/2013/11/IMG_0968.jpg" alt="" />

### Capacitors

From left to right:

  * 1 x 0.047 uF non-polarised (decoupling capacitor, voltage high to ground)
  * 1 x 0.47 uF non-polarised (pin 5 to ground, original circuit specifies 0.047 uF)
  * 1 x 2.2 uF polarised (bypass capacitor, pin 7 to ground)
  * 1 x 0.1 uF polarised (pin 3, signal in, high)
  * 1 x 0.022 uF non-polarised (pin 1 to pin 5, bass boost circuit)
  * 1 x 100uF polarised (pin 5, just before the speaker in the circuit, original circuit specifies 220uF)

<img class="alignnone size-full wp-image-1626" title="IMG_0965" src="/assets/2013/11/IMG_0965.jpg" alt="" />

The instructions on Hack A Week call for almost entirely different values. I found that by swapping out different capacitors I could get better results.

### Other components

  * LM386(N) chip
  * 8-pin DIP socket
  * 9V battery and connector, or 9V power supply
  * 8Ohm 0.5W speaker
  * Wire
  * 10K potentiometer (I used linear, but a logarithmic potentiometer is probably better) and knob
  * Switch
  * 1 x power and 2 x mini-jack sockets (for audio in and audio out, assuming your speaker is wired separately)
  * LED (optional, for a distortion indicator)
  * Breakaway female headers (not shown, optional, to allow you to swap out some of the components)

<img class="alignnone size-full wp-image-1628" title="IMG_0971" src="/assets/2013/11/IMG_0971.jpg" alt="" />

### Enclosure

I used an old pipe tobacco tin, and some perfboard to mount the components for the final project.

<img class="alignnone size-full wp-image-1629" title="IMG_0973" src="/assets/2013/11/IMG_0973.jpg" alt="" />

## Breadboard prototyping

I built the circuit on a breadboard first, and this where I solved most of the problems.

<img class="alignnone size-full wp-image-1624" title="IMG_0952" src="/assets/2013/11/IMG_0952.jpg" alt="" />

### Interference

90% of the time I spent building this circuit I was dealing with unwanted interference, either a hum when no audio input was plugged in, or distortion to the amplified signal.

Some research turned up a [few mods designed to address this problem](http://lowvoltage.wordpress.com/2011/04/23/lm386-audio-amplifier/), and after lots of trial and error, I settled on:

  * 1 x 0.047 uF non-polarised decoupling capacitor, between voltage high and ground, near the power in.
  * 1 x 2.2 uF bypass capacitor, between pin 7 and ground.

I also found that a battery caused far fewer problems than an AC-DC adapter, and that a 9V supply performed better than 5V or less.

### Pre-amp gain control

Most LM386 circuits allow you to adjust the gain of the incoming signal. I ditched this part, on the basis that I could do it more easily with the volume control on the audio device I’m plugging in.

### Post-amp volume control and indicator

At the same time, I couldn’t resist adding a different unnecessary knob – and LED – to the enclosure, so I put in a potentiometer and LED wired in parallel between pin 5 and the speaker. The LED is completely redundant. It lights up when the signal reaches a certain point, which is also the point when it starts distorting, so you could argue that it’s a useful visual clipping indicator, so that’s what I’ll be doing.

### Stereo summing

The circuit amplifies one signal only. To amplify a stereo signal you’d need 2 chips and 2 speakers. While you could wire up the audio input to just one of the left or right channels, for [some recordings](http://en.wikipedia.org/wiki/The_Gift_(Velvet_Underground_song)), this would result in a strange loss of signal.

So it’s tempting to just wire the left and right inputs together, but do that, and you could end up with some [nasty things](http://www.rane.com/note109.html) happening:

> Here is the rule: Outputs are low impedance and must only be connected to high impedance inputs &#8212; never, never tie two outputs directly together &#8212; never. If you do, then each output tries to drive the very low impedance of the other, forcing both outputs into current-limit and possible damage. As a minimum, severe signal loss results.

So I added a proper stereo summing circuit before pin 3.

<img class="alignnone size-full wp-image-1625" title="IMG_0955" src="/assets/2013/11/IMG_0955.jpg" alt="" />

## Making the enclosure

My reason for making this circuit was largely so I’d have an excuse to make a box. I used an old tobacco tin, and cut a piece of perfboard to fit inside, leaving room for the 9V battery. I figured out where I wanted the external controls and sockets to go, and then marked on the board where I would put each part of the circuit.

<img class="alignnone size-full wp-image-1630" title="IMG_0974" src="/assets/2013/11/IMG_0974.jpg" alt="" />

Starting with the DIP socket, I started to wire up all the components.

<img class="alignnone size-full wp-image-1631" title="IMG_0976" src="/assets/2013/11/IMG_0976.jpg" alt="" />

When I had all the board-mounted components soldered on and wired up, I turned my attention to the case.

<img class="alignnone size-full wp-image-1632" title="IMG_0979" src="/assets/2013/11/IMG_0979.jpg" alt="" />

I drilled holes in the case for the power switch, audio in socket, speaker out socket, volume knob and LED. I lined the bottom of the case with a piece of plastic to avoid shorts.

<img class="alignnone size-full wp-image-1633" title="IMG_0980" src="/assets/2013/11/IMG_0980.jpg" alt="" />

Before fixing the positions of all the controls, and while I could still easily remove the circuit board, I wired everything up one more time to test the circuit.

<img class="alignnone size-full wp-image-1634" title="IMG_0984" src="/assets/2013/11/IMG_0984.jpg" alt="" />

<img class="alignnone size-full wp-image-1635" title="IMG_0986" src="/assets/2013/11/IMG_0986.jpg" alt="" />

Some of the parts were proper panel-mount components with nuts and washers to secure them to the case. Others I’d stripped from old circuit boards and were designed to be PCB-mounted. These I had to mount to the case with hot glue. Clearly this is a less than ideal solution for a component that is put under strain every time you plug something in.

<img class="alignnone size-full wp-image-1636" title="IMG_0994" src="/assets/2013/11/IMG_0994.jpg" alt="" />

I’m ordering some panel-mount mini-jack sockets, so until these arrive, I left the audio output wires terminated with a female header, to which I can easily temporarily plug in wires from the speaker.

<img class="alignnone size-full wp-image-1637" title="IMG_0995" src="/assets/2013/11/IMG_0995.jpg" alt="" />

The LED is also mounted with hot glue. I also wired this up via a header so I could replace it if I burned it out.

<img class="alignnone size-full wp-image-1638" title="IMG_0996" src="/assets/2013/11/IMG_0996.jpg" alt="" />

Once the circuit was fully fitted in the box, I made a friction-fit holder for the battery out of plastazote foam.

<img class="alignnone size-full wp-image-1639" title="IMG_0999" src="/assets/2013/11/IMG_0999.jpg" alt="" />

<img class="alignnone size-full wp-image-1642" title="IMG_1015" src="/assets/2013/11/IMG_1015.jpg" alt="" />

Finally, I made a temporary speaker cabinet out of foamboard, to be replaced when I have a suitable box.

<img class="alignnone size-full wp-image-1643" title="IMG_1024" src="/assets/2013/11/IMG_1024.jpg" alt="" />

You can see [hi-res versions of all these images](http://www.flickr.com/photos/andrewsleigh/sets/72157636914639523/) on Flickr.