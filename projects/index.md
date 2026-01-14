---
title: Projects
nav:
  order: 1
  tooltip: Our Projects
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

Our projects bring together method development, data analysis, and clinical collaboration within funded research initiatives, translating computational ideas into sustained and coordinated research efforts.

{% include tags.html tags="current, past" %}

{% include search-info.html %}

{% include section.html %}

## Featured

{% include list.html component="card" data="featured_projects" filter="group == 'featured'" %}

{% include section.html %}

## More

{% include list.html component="card" data="other_projects" filter="!group" style="small" %}
