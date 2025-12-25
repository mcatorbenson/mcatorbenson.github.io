---
layout: default
title: Publications
---
<h2>Publications</h2>
{% for pub in site.data.publications %}
**{{ pub.authors }}** ({{ pub.year }}).  
*{{ pub.title }}*.  
{{ pub.journal }}{% if pub.doi %}. DOI: {{ pub.doi }}{% endif %}

{% endfor %}
