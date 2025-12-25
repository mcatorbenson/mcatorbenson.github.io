---
layout: default
title: Publications
---
## Publications

{% assign current_year = nil %}

{% for pub in site.data.publications %}
  {% if pub.year != current_year %}
    {% if current_year %}
      </ol>
      </details>
    {% endif %}

    {% assign current_year = pub.year %}

    <details open class="pub-year-block">
      <summary class="pub-year">{{ current_year }}</summary>
      <ol class="publications">
  {% endif %}

  <li class="pub-item">
    {{ pub.authors | markdownify | remove: "<p>" | remove: "</p>" }}
    ({{ pub.year }}).
    <em>{{ pub.title }}</em>.
    {{ pub.journal }}{% if pub.doi %}.
    <a href="https://doi.org/{{ pub.doi }}">https://doi.org/{{ pub.doi }}</a>{% endif %}
  </li>

{% endfor %}

{% if current_year %}
    </ol>
  </details>
{% endif %}
