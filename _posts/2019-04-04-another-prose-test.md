---
author: Andrew
layout: post
category: blog
published: true
title: Another prose test
date: '2019-04-04'
---
 
Added this workaround:

```
      # workaround for default unpublished metadata issue: https://github.com/prose/prose/issues/111
      - name: "published"
        field:
          element: "checkbox"
          label: "published"
          value: "true"
          
```
