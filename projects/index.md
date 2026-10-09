---
title: Projects
nav:
  order: 1
  tooltip: Our Projects
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

Our projects study individual differences in brain activity and develop machine learning methods for healthcare. Explore our work on lifespan brain dynamics with MEGaNorm, language-related EEG responses with P600Norm, and applications in personalized care and nurse staffing.

{% include tags.html tags="current, past, meg, eeg, normative modeling, machine learning, digital health" %}

{% include search-info.html %}

{% include section.html %}

## Featured

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

## More

{% include list.html component="card" data="projects" filter="!group" style="small" %}
