---
title: Projects
nav:
  order: 1
  tooltip: Our Projects
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

Our projects focus on developing and applying machine learning methods in neuroimaging and healthcare, with a strong emphasis on real-world relevance and societal impact. They combine methodological innovation with large-scale data analysis, clinical collaboration, and human-centered design to address challenges in mental health, brain aging, and healthcare operations. Across projects, we aim to translate computational research into robust, interpretable, and actionable tools that support personalized care, informed decision-making, and sustainable healthcare systems.

{% include tags.html tags="current, past, meg, eeg, normative modeling, machine learning, digital health" %}

{% include search-info.html %}

{% include section.html %}

## Featured

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

## More

{% include list.html component="card" data="projects" filter="!group" style="small" %}
