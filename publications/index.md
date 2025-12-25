---
layout: default
title: About
---
{% for pub in site.data.publications %}
**{{ pub.authors }}** ({{ pub.year }}).  
*{{ pub.title }}*.  
{{ pub.journal }}{% if pub.doi %}. DOI: {{ pub.doi }}{% endif %}

{% endfor %}
