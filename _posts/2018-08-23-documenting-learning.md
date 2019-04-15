---
id: 2310
title: Documenting learning
date: 2018-08-23T13:48:31+00:00
author: Andrew
layout: post
guid: http://andrewsleigh.com/?p=2310
permalink: /2018/08/23/documenting-learning/


redirect_from:
  - /2310/
  - /2018/08/23/documenting-learning/


categories:
  - Uncategorized
tags:
  - fabacademy
  - learning
---
One of the unexpected things I learned from [Fab Academy](http://fab.academany.org/2018/labs/fablabbrighton/students/andrew-sleigh/) was the importance and value of documentation. Fab Academy is assessed on documentation – not what you make, but how well you evidence what you’ve done, explain what you discovered, and describe the process of learning and solving problems. 

This is valuable not just for assessment, but as part of the learning process. Neil Gershenfeld’s regular refrain was to ‘_document as you work_’, not after the event. I pretty much followed this advice, which made the process of pulling together my weekly assignments much easier, and also helped me record learning as it happened. As a result, I created a wealth of reference material to which I frequently returned. 

Documentation is so deeply embedded within Fab Academy, that – if I remember correctly – Neil once said words to the effect of, &#8220;engineering is the production of documentation&#8221;.<!--more-->

### If you can’t explain it you don’t understand it

It’s one thing to record some settings. My most frequently used note in Fab Academy is called ‘Laser Settings’ and has lines like this:

<pre>Cardboard Cutting
 - Speed 50% 
 - Power 50% 
 - Freq 2500Hz 
Cardboard Scoring 
 - Speed 100% 
 - Power 10% 
 - Freq 2500Hz</pre>

It doesn’t take long to jot these down. It’s another thing to explain in more detail how something went wrong, how you fixed it and what you learned in the process. Or why you used a certain line of code to achieve an effect. While this kind of documentation takes more work, I frequently found it to be a valuable process. As I was trying to explain something, I had to think through the problem in detail, and often I would realise I had missed a step; or glossed over something I didn’t fully understand; or just misunderstood something. The rigour that’s enforced when you have to articulate a process from beginning to end helps you understand that process better; spot any missteps along the way; and makes it much more useful as reference material when you need to revisit it later. 

[Richard Feynman agrees. ](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it)

### A frictionless system

Key to documenting as you go is having a frictionless system. For many makers, this might be a paper notebook. My mum, who’s an artist and teacher, keeps sketchbooks of experiments, samples and records of process and materials. If you know the result is going to be published on the web, maybe it’s tempting to use a CMS like WordPress or a platform like Tumblr. For me, these fail on 3 counts. 

  1. My initial notes are often very scrappy, full of spelling mistakes, and half-formed thoughts. I don’t want to publish these to the web without a second pass
  2. There’s too much friction in opening up a web browser, logging into a CMS, dealing with the update notifications, and dealing with media libraries, tags, etc. 
  3. I want maximum portability. Maybe I’m not online when I want to refer to my notes. Maybe one of these services disappears and takes my content with it. Maybe my digital brain app of choice changes again (I’ve been through Notational Velocity, Yojimbo, Evernote, Apple Notes, and many others). Plain text is super-flexible, and can be imported into – or created in – any of these. 

So for Fab Academy, I experimented with a plain text documentation system (using [Markdown](https://daringfireball.net/projects/markdown/syntax) for formatting). I created a .md text file for each assignment, and just wrote notes in text as I worked. I then used Jekyll to publish these to the web. [Jekyll](https://jekyllrb.com) is a static site generator, that takes in a series of series of static text files and spits out a series of static html files, with internal navigation, formatting and other HTML gubbins. My entire Fab Academy website is made using Jekyll and this process.

### Learning Processing

Why am I writing this now? 

One of the other outcomes from Fab Academy was that I finally wrote some software that does something. I have written code professionally in the past, but that was a long time ago, using systems that no-one would recommend today (ColdFusion, anyone?). Since then I’ve fiddled around with Python tutorials and little Arduino projects. But nothing that I found rewarding. Writing the code for my Fab Academy final project was a long struggle, and I couldn’t have done it without help, but I did actually make something functional, and got to grips with some basic programming concepts in a way that I had long ago forgotten about.

Almost incidentally, I played around with [Processing](https://processing.org), the language designed for artists working with visual media, interactivity, generative design, etc. Like Arduino, Processing has some nice beginner features, but it also has a helpful IDE, and the roundtrip between code and result is much faster. It’s a lot of fun to play with.

Since finishing Fab Academy, I’ve stuck with Processing, and I’ve been trying to learn it in more depth. Naturally, I decided to document my progress. 

### My documentation system

I’m using a similar system to track my experiments with Processing, and publishing the result here in case other learners find it useful. 

~~I’m writing plaintext notes in BBEdit, using Markdown for formatting, and running Jekyll locally to view rendered webpages. Then I periodically sync the local sitebin with a folder on my webhost. This could probably be automated – **if you know how, please let me know.**~~

~~The public docs live at [https://andrewsleigh.com/**learning/processing**](https://andrewsleigh.com/learning/processing/)~~

~~I copy the relevant project files to a local Git repository, and then push this to Github as I work. Project files referred to in the documentation all point to publicly accessible files in the [Github repo](https://github.com/andrewsleigh/learning-processing).~~

**Update: 2019-04-15.** I've adjusted my system, and now going allin on GitHub as a hosting platform. So my workflow has simplified slightly. I write my notes in Markdown, but other than for testing, don't need to run a local Jekyll server. When I'm done writing, I commit the changes in Git, and then push them to the repository on GitHub. 

GitHub Pages then handles the conversion of those Markdown files to HTML, and serving from a github.io domain. 

So the public docs now live at [https://andrewsleigh.github.io/learning-processing](https://andrewsleigh.github.io/learning-processing)

I’m writing plaintext notes in BBEdit, using Markdown for formatting, and running Jekyll locally to view rendered webpages. Then I periodically sync the local sitebin with a folder on my webhost. This could probably be automated – **if you know how, please let me know.**


Each experiment is written up as its own note, which translates to a series of date-ordered blog posts on the live site. I’ve found this approach has a number of benefits

  * Programmers already use inline comments to write notes to themselves in the code. Documentation complements this technique, and allows for more detail and the use of images and other media.
  * There are many Processing tutorials on the web, mostly written by experts. These are valuable. But sometimes experts forget what it’s like to have a beginner’s mindset. They take things for granted that seem impenetrable when you’re a newbie. I think it’s good to record these mysteries as you encounter them, not least to look back and see how far you’ve come.
  * I tend to increment the version number of a file as I try a significant change. So, in theory, it should be possible to trace back through a project and see simpler versions by going back to earlier version numbers, or find solutions by looking at later versions. But in practice, learning and play is not linear like this. I might do some work on one problem, reach a dead end and then work on something else. Then I discover a solution and return to the first problem. By keeping a time-ordered series of notes, I can track this hopping between branches, in a way that the sequential file listing in the Git repo doesn’t reveal. 

Incidentally, I’m using the URL format: /learning/processing. I figure that maybe I’ll do the same for other learning projects in the future. Maybe we can look forward to learning/yoga or learning/metalwork &#8230;