---
seo_title: "ML4PNP | Machine Learning for Precision Neuropsychiatry"
seo_description: "ML4PNP at Tilburg University studies individual brain differences through normative modeling, EEG, MEG, MRI, and machine learning for healthcare."
---

<div class="lab-intro">
  <div>
    <h1>Machine learning for <em>precision neuropsychiatry</em></h1>
    <p>How does each person’s brain differ, and what can those differences tell us about brain health? At Tilburg University, we use machine learning with EEG, MEG, and MRI to study individual variation across the lifespan.</p>
    <div class="intro-links">
      <a href="{{ '/projects/' | relative_url }}">Explore our research <span aria-hidden="true">→</span></a>
      <a href="{{ '/publications/' | relative_url }}">Publications</a>
      <a href="{{ '/software/' | relative_url }}">Software</a>
    </div>
  </div>
  <figure>
    <a href="{% post_url 2026-10-09-p600-mindlab %}">
      <img class="recording-photo" src="{{ '/images/p600norm-recording.webp' | relative_url }}" width="831" height="464" alt="Participant wearing an EEG cap at the recording workstation at MindLabs">
      <img class="electrode-detail" src="{{ '/images/p600norm-electrodes.webp' | relative_url }}" width="829" height="464" alt="Electrodes on the EEG cap used in the P600Norm study">
    </a>
    <figcaption>P600Norm at MindLabs · Photographs by BRIX</figcaption>
  </figure>
</div>

{% include section.html %}

<div class="research-spotlight">
  <div>
    <h2>How do brain rhythms vary across the lifespan?</h2>
    <p>Using resting-state MEG, we built reference charts that place an individual’s brain rhythms within the expected range for their age.</p>
    <div class="study-links">
      <a href="https://doi.org/10.1038/s42003-026-09825-2">Read the paper in <em>Communications Biology</em></a>
      <a href="https://github.com/ML4PNP/MEGaNorm">MEGaNorm software</a>
    </div>
  </div>
  <dl>
    <div><dt>Study participants</dt><dd>1,846</dd></div>
    <div><dt>Age range in years</dt><dd>6–88</dd></div>
  </dl>
</div>

{% include section.html %}

## Our research

{% capture col1 %}
### Normative Modeling

We map how brain structure and function vary across people and throughout life. These reference models help us study individual differences that can be missed by comparisons between patient and control groups.
{% endcapture %}

{% capture col2 %}
### EEG and MEG methods

We develop reproducible tools for studying brain rhythms and responses to events. Our work spans large-scale MEG analysis and comparisons of stationary and portable EEG recordings.
{% endcapture %}

{% capture col3 %}
### Machine Learning for Healthcare

We develop and study machine learning methods for personalized care and clinical decision support. Our projects include lifestyle recommendations in psychosis and predicting nurses' perceptions of staffing adequacy.
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% include section.html %}

## Latest from the lab

{% for news_post in site.posts limit:3 %}
<article>
  <h3><a href="{{ news_post.url | relative_url }}">{{ news_post.title | escape }}</a></h3>
  <p><time datetime="{{ news_post.date | date_to_xmlschema }}">{{ news_post.date | date: "%B %-d, %Y" }}</time></p>
  <p>{{ news_post.excerpt | strip_html | normalize_whitespace | truncatewords: 40 | escape }}</p>
</article>
{% endfor %}

[All lab news]({{ '/news/' | relative_url }})

{% include section.html %}

## Work with us

Interested in collaborating on normative modeling, neuroimaging, or machine learning for healthcare? [Get in touch]({{ '/contact/' | relative_url }}) to discuss a research question or potential collaboration.

Students interested in thesis projects or research experience are welcome to contact us about possible opportunities. Tell us about your interests, background, and the period you have in mind.

[Meet our team]({{ '/team/' | relative_url }}) · [Student and collaboration enquiries]({{ '/contact/' | relative_url }})

{% include section.html %}

## At Tilburg University

ML4PNP is part of the Computational Models of Brain and Behavior research unit within the Research Center for Cognitive Science and Artificial Intelligence, Tilburg School of Humanities and Digital Sciences, Tilburg University.

{% include figure.html image="images/Tilburg-University-Logo.png" link="https://www.tilburguniversity.edu/" caption="Tilburg University" width="280px" %}
