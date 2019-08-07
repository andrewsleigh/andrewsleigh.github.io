---
permalink: /making/open-laptop-stand/
redirect_from:
  - /open-laptop-stand/

id: 822
title: Open laptop stand
date: 2012-05-10T17:11:45+00:00
author: Andrew
layout: page
guid: http://andrewsleigh.com/?page_id=673
hero_image: /assets/2013/03/7163599536_a2b693383c_h.jpg
---
I&#8217;m running an experiment. Inspired by the open hardware movement, I decided to design a product, document the design process and parameters of the product, and share it, to encourage adaption and improvement by others. 


<!--more-->

I&#8217;ve [blogged about it here](/2012/05/10/an-experiment-in-open-hardware), and I&#8217;m posting the [files on Thingiverse](http://www.thingiverse.com/thing:22724) for others to use.



<img src="/assets/2013/03/7163599536_a2b693383c_h.jpg" alt="7163599536_a2b693383c_h"     class="alignnone size-full wp-image-1768" />

<!--more-->

## Design considerations

I&#8217;m sharing my design requirements and constraints here as documentation. It may help you to know what has driven decisions in the design, so that if you have different objectives or constraints, you can more quickly see how to adapt it.

### Basic metrics

The stand is designed for a 13&#8243; Macbook Air (32.5 cm wide x 22.7 cm deep). It&#8217;s pretty light (1.35 kg), so I don&#8217;t have to worry too much about weight-supporting strength.

The screen of the Macbook opens to approximately 135°. I&#8217;ve experimented with bases angled at 40°, but the current version (3.0) has a 30° base, which gives better stability and allows you to push the screen back to 15° behind vertical.

Ergonomically, the laptop should be positioned so the top of the screen is about level with your eyes. In my case, that means raising the screen about 20 cm off the desk. That makes for quite a tall stand, so in this design, I&#8217;ve settled for a rise of about 17 cm.

### Usability and dynamics

<img src="/assets/2012/05/7163600096_93c1e49aad_h.jpg" alt="Cutout on top plate to allow you to easily grab the laptop"     class="size-full wp-image-1779" />

<span class = "imageCaption">Cutout on top plate to allow you to easily grab the laptop</span>



<img src="/assets/2012/05/7011319357_be7389ab52_k.jpg" alt="Just looking at this picture makes me nervous"     class="size-full wp-image-1778" />

<span class = "imageCaption">Just looking at this picture makes me nervous</span>



When you&#8217;re using your computer normally, you don&#8217;t notice the stand. It comes to your attention most when you open, close or move the computer. This stand has been through several iterations to address these situations.

The hinge in the Macbook is carefully calibrated so that you can raise or reposition the screen with one finger, without the base lifting off the work surface. As much as possible, I want to enable this behaviour when the laptop is on the stand. That means not obstructing the finger notch at the front of the computer. It also means accounting for the different balancing characteristics when the laptop base is tilted. Earlier versions were tilted up at 40°, which reduces the downwards force on the base. It tended to lift up at the front when you opened the lid, risking the whole thing sliding off the stand. For the current version, I reduced the angle of the top plate from to 30°. While this results in a reduced height for the screen, it distributes the weight better, making the laptop more stable when opening.

I&#8217;ve also added a cutout on the front edge of the top plate so you can easily grab the laptop with one hand and lift it off the stand.

### Materials

<img src="/assets/2012/05/7011316569_5f9e023335_k.jpg" alt="A snapped crossbar from an earlier acrylic stand"     class="size-full wp-image-1777" />

<span class = "imageCaption">A snapped crossbar from an earlier acrylic stand</span>



The design that I&#8217;m sharing here could be cut out of MDF or plywood, but not on our laser, which seems to burn wood rather than vaporise it. So for now, I&#8217;m using acrylic. Acrylic cuts cleanly, is readily available, and is affordable (about £3 for an A4 sheet of 3mm, clear acrylic, bought in bulk) so it&#8217;s not all bad. 

But acrylic is quite brittle, and slot construction also introduces points of weakness into the design. The joins are subject to forces, especially when you&#8217;re assembling the piece, and the corners fracture easily. I&#8217;m now using the [technique described on the Ponoko blog](http://blog.ponoko.com/2010/06/17/how-to-make-snug-joints-in-acrylic/) to try and dissipate these forces.

### Constraints

**3D products from 2D sheets:** Laser cutters are great for sheet material. But to make a three dimensional product, you have to assemble the sheets in some way. This can work in your favour (I want to make one for a friend. This means I can flatpack it and send it to him in the post), but it also introduces weakness and complexity. For example, I can visualise a stand made out of one piece of bent acrylic sheet, that you could make quite easily if you had access to tools to form angles with some precision.

<img src="/assets/2012/05/7011317917_e98f49fecf_k.jpg" alt="An earlier, narrow stand, cut from A4 sheets, that didn’t provide adequate support"     class="size-full wp-image-1775" />

<span class = "imageCaption">An earlier, narrow stand, cut from A4 sheets, that didn’t provide adequate support</span>



**Maximum sheet size:** The [Build Brighton](http://www.buildbrighton.com/blog/) laser is a [Full Spectrum 40W CO2 Hobby Laser](http://fslaser.com/products/lasers/hobby-lasers). It has a cutting table that measures about 22 cm x 31 cm. I believe you can work round this and cut bigger pieces (about 31 cm x 40 cm), but not without some hacking about with the machine, which is not mine to break.

So I need to be able to cut all of my pieces out of sheets no bigger than this, allowing for a safe margin on each side. Look at the dimensions of the Macbook, and you can see that it&#8217;s a pretty tight fit, and that led to some compromises in the design. After trying several unsuccessful designs based on A4 sheets, I eventually decided to get bigger sheets cut. If you&#8217;re ordering acrylic online, you can get it cut to pretty much whatever size you want, it doesn&#8217;t have to be A4. So I got sheets of the same size as the cutting bed. 

**Minimal material requirements:** I want a design that requires no gluing and only uses one material. If you want to make this stand, you  don&#8217;t have to go hunting for obscure materials, or buy special glues or tools that you&#8217;ll never use again. Three sheets of acrylic and you&#8217;re good to go.

### Distribution

I&#8217;m posting the files, design documentation and photos for this stand on [Thingiverse](http://www.thingiverse.com/thing:22724), which is where I went to look for other stand designs to adapt. What is Thingiverse?

> Thingiverse is a place for you to share your digital designs with the world. We believe that just as computing shifted away from the mainframe into the personal computer that you use today, digital fabrication will share the same path. In fact, it is already happening: laser cutters, cnc machines, 3D printers, and even automated paper cutters are all getting cheaper by the day. These machines are useful for a huge variety of things, but you need to supply them with a digital design in order to get anything useful out of them. We&#8217;re hoping that together we can create a community of people who create and share designs freely, so that all can benefit from them.

## Make one yourself

Hopefully this documentation helps explain why the stand is designed the way it is, and may help you to make your own modifications. You can [download the files on Thingiverse](http://www.thingiverse.com/thing:22724) and have a play. If you want to know why I&#8217;m interested in this, read my [blog post](/2012/05/10/an-experiment-in-open-hardware). If you have thoughts about the stand or the experiment, I&#8217;d love to hear them. Thanks!