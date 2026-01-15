---
title: Software
nav:
  order: 2
  tooltip: Software, tools, and packages
---

# {% include icon.html icon="fa-solid fa-box" %}Software

We develop and maintain open-source software that implements and benchmarks machine learning methods for neuroimaging data, supporting reproducible research and scalable analysis across studies and sites. Our software emphasizes robustness, transparency, and interoperability, enabling researchers to apply, evaluate, and extend state-of-the-art methods across different datasets and experimental settings. By prioritizing open development practices and well-documented workflows, we aim to facilitate methodological reuse, foster collaboration, and support the translation of computational methods into neuroimaging and clinical research.

{% include search-info.html %}

{% include section.html %}

## In-house software

{% include list.html component="card" data="software" filter="group == 'featured'" %}

{% include section.html %}

## External software contributions

{% include list.html component="card" data="software" filter="!group" style="small" %}
