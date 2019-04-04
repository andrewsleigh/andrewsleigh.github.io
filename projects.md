---
layout: page
title: "Projects"
permalink: "/projects/"

# The redirect from plug can only handle one redirect per page. (Unless I set up dummy pages for all these old pages and use `redirect_to`)
# So I’m inlined to go with `clients` and leave the rest.

redirect_from:
  - /work/
  - /speaking/
  - /clients/


regenerate: true
---

{% assign doclist =  site.projects | sort: 'date' | reverse  %}


  {% for item in doclist %}

      
 <div>
        <h1 class="catalogue-title"> <a href="{{ site.baseurl }}{{ item.url }}" class="catalogue-item">{{ item.title }}</a></h1>

         <a href="{{ site.baseurl }}{{ item.url }}" class="excerpt_link_no_highlight">{{ item.excerpt }}</a>
      </div>      
  
{% endfor %}
