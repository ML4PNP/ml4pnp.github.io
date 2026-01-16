---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

We are an interdisciplinary team of researchers, PhD candidates, and students combining machine learning and neuroimaging expertise to advance precision neuropsychiatry.

{% include section.html %}

{% include list.html data="members" component="portrait" sort="order" %}

{% include section.html background="images/background.png" dark=true %}

# {% include icon.html icon="fa-solid fa-up-right-from-square" %}Collaborators

<ul class="list-unstyled">
  {% for collaborator in site.data.collaborators %}
    <li class="mb-2">
      <a href="{{ collaborator.url }}" target="_blank" rel="noopener">
        {{ collaborator.name }}
      </a>:
      <span class="text-muted">
        {% if collaborator.department %}
          {{ collaborator.department }}{% if collaborator.university %}, {% endif %}
        {% endif %}
        {% if collaborator.university %}
          {{ collaborator.university }}
        {% endif %}
        {% if collaborator.country %}
          ({{ collaborator.country }})
        {% endif %}
      </span>
    </li>
  {% endfor %}
</ul>

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
