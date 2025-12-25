---
layout: default
title: Publications
---

## Publications

<ol class="publications" reversed>
{% for pub in site.data.publications %}
  <li>
    {{ pub.authors | markdownify | remove: "<p>" | remove: "</p>" }}
    ({{ pub.year }}).
    <em>{{ pub.title }}</em>.
    {{ pub.journal }}{% if pub.doi %}.
    <a href="https://doi.org/{{ pub.doi }}">https://doi.org/{{ pub.doi }}</a>{% endif %}
  </li>
{% endfor %}
</ol>
