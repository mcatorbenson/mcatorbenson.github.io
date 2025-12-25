---
layout: default
title: About
---
<h2>Welcome</h2>
{% for pub in site.data.publications %}
**{{ pub.authors }}** ({{ pub.year }}).  
*{{ pub.title }}*.  
{{ pub.journal }}{% if pub.doi %}. DOI: {{ pub.doi }}{% endif %}

{% endfor %}
