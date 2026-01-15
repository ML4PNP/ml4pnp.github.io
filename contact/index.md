---
title: Contact
nav:
  order: 6
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

This page provides contact information for the ML4PNP lab. Please use the details below for general inquiries, collaboration opportunities, student positions, or questions related to our research, software, and projects.

{%
  include button.html
  type="email"
  text="Email"
  link="s.m.kia@tilburguniversity.edu"
%}

{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps"
  link="https://maps.app.goo.gl/drfSZ37AKYJ2FjAbA"
%}

{% include section.html dark=true %}

{% capture col1 %}
Department of Intelligent Syetems, Tilburg School of Humanities and Digital Science, Tilburg University.
{% endcapture %}

{% capture col2 %}
Visiting Address: Dante Building, Warandelaan 2, 5037 AB Tilburg, the Netherlands.
{% endcapture %}

{% capture col3 %}
Phone: +31 (0)13 - 466 8118, E-mail: tshd.dca@tilburguniversity.edu
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
