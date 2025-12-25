---
layout: default
title: Publications
---
## Publications
{% for pub in site.data.publications %}
{{ pub.authors | markdownify }} {{ pub.year }}.  
*{{ pub.title }}*. {{ pub.journal }}

{% endfor %}

