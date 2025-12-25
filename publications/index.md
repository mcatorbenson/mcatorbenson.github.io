---
layout: default
title: Publications
---
## Publications
{% for pub in site.data.publications %}
{{ pub.authors | replace: site.my_name, "**" | append: "**" | markdownify }} ({{ pub.year }}).  
*{{ pub.title }}*.  
{{ pub.journal }}{% if pub.doi %}. DOI: {{ pub.doi }}{% endif %}

{% endfor %}
