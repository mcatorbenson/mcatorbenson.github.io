---
layout: default
title: Publications
---

## Publications

{% for pub in site.data.publications %}
{{ pub.authors | markdownify }} ({{ pub.year }}). *{{ pub.title }}*. {{ pub.journal }}{% if pub.doi %}. <a href="https://doi.org/{{ pub.doi }}">https://doi.org/{{ pub.doi }}</a>{% endif %}

{% endfor %}
