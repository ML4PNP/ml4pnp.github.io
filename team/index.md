---
seo_title: "Team and Alumni"
seo_description: "Meet the researchers, students, alumni, and collaborators of ML4PNP, the precision neuropsychiatry machine learning lab at Tilburg University."
title: Team
nav:
  order: 3
  tooltip: About our team
---

# Team

We are an interdisciplinary team of researchers, PhD candidates, and students combining machine learning and neuroimaging expertise to advance precision neuropsychiatry.

{% include section.html %}

<div class="team-grid">
{% include list.html data="members" component="portrait" sort="order" filter="group != 'alumni'" %}
</div>

{% include section.html %}

## Alumni

Former members who have contributed to our research and lab community.

<div class="team-grid">
{% include list.html data="members" component="portrait" sort="order" filter="group == 'alumni'" %}
</div>

{% include section.html %}

## Collaborators

{% assign sorted_collaborators = site.data.collaborators | sort: "last_name" %}

<ul class="collaborator-list">
  {% for collaborator in sorted_collaborators %}
    <li class="mb-2">
      <a href="{{ collaborator.url }}" target="_blank" rel="noopener">
        {{ collaborator.title }} {{ collaborator.name}} {{collaborator.last_name}}
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
