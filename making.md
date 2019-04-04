---
layout: page
title: "Making"
permalink: "/making/"
regenerate: true

# The redirect from plug can only handle one redirect per page. (Unless I set up dummy pages for all these old pages and use `redirect_to`)
# So I’m inlined to go with `clients` and leave the rest.

redirect_from:
  - /howto/
  - /projects/howdo/
  - /projects/microphone-shock-mount/



---

Project walkthroughs and instructions for things I&#8217;ve made. You can also find me on [Instructables](http://www.instructables.com/member/Andrew+Sleigh/) and [GitHub](https://github.com/andrewsleigh).


There is some older material elsewhere, including [photo walkthroughs on Flickr](http://www.flickr.com/photos/andrewsleigh/collections/72157625572591433/) and [video walkthroughs on Vimeo](https://vimeo.com/album/2323611/sort:preset/format:detail). 

{% assign doclist =  site.making | sort: 'date' | reverse  %}


  {% for item in doclist %}
 <div>
        <h1 class="catalogue-title"> <a href="{{ site.baseurl }}{{ item.url }}" class="catalogue-item">{{ item.title }}</a></h1>

        <a href="{{ site.baseurl }}{{ item.url }}" class="excerpt_link_no_highlight">{{ item.excerpt }}</a>
      </div>
  
{% endfor %}