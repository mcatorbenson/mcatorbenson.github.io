---
layout: default
title: Publications
---

## Publications

{% for pub in site.data.publications %}
<p>
  {{ pub.authors | markdownify | remove: "<p>" | remove: "</p>" }}
  ({{ pub.year }}).
  <em>{{ pub.title }}</em>.
  {{ pub.journal }}{% if pub.doi %}.
  <a href="https://doi.org/{{ pub.doi }}">https://doi.org/{{ pub.doi }}</a>{% endif %}
</p>
{% endfor %}
