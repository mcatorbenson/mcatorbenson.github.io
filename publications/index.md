---
layout: default
title: Publications
---

## Publications

{% assign current_year = nil %}

<ol class="publications">
{% for pub in site.data.publications %}
  {% if pub.year != current_year %}
    {% assign current_year = pub.year %}
    <li class="pub-year">{{ current_year }}</li>
  {% endif %}

  <li class="pub-item">
    {{ pub.authors | markdownify | remove: "<p>" | remove: "</p>" }}
    ({{ pub.year }}).
    <em>{{ pub.title }}</em>.
    {{ pub.journal }}{% if pub.doi %}.
    <a href="https://doi.org/{{ pub.doi }}">https://doi.org/{{ pub.doi }}</a>{% endif %}
  </li>
{% endfor %}
</ol>
