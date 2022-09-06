---
id: 826
title: Blog
date: 2010-10-06T13:24:22+00:00
author: Andrew
layout: page
guid: http://andrewsleigh.com
dsq_thread_id:
  - "3099042231"
regenerate: true
permalink: /blog/
---



{% for post in site.posts %}
{% assign currentdate = post.date | date: "%Y" %}
{% if currentdate != date %}
{% unless forloop.first %}
</ul>
{% endunless %}
<h1 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h1>
<ul>
{% assign date = currentdate %}
{% endif %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% if forloop.last %}</ul>
{% endif %}
{% endfor %}

 
