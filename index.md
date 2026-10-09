---
---

# Machine Learning for Precision Neuropsychiatry (ML4PNP) Lab

How does each person's brain differ, and what can those differences tell us about brain health? At ML4PNP, we combine machine learning with EEG, MEG, and MRI to study individual variation in brain structure and function. We build normative models and open-source tools to support research toward more personalized mental health care. We are based at **Tilburg University**, bringing together expertise in machine learning, neuroimaging, and clinical neuroscience.

{% include button.html link="/projects/" text="Explore our research" tooltip="Explore our research projects" icon="fa-solid fa-arrow-right" %}
{% include button.html link="/software/" text="Use our software" tooltip="Explore our open-source software" icon="fa-solid fa-code" %}

{% include section.html %}

## Our research

{% capture research_image_link %}{% post_url 2026-10-09-p600-mindlab %}{% endcapture %}
{% include figure.html
  image="images/research.png"
  link="/projects/"
  width="1000px"
%}

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

## Explore the lab

{% capture text %}

Our projects map individual differences in brain activity and explore machine learning for healthcare. MEGaNorm studies brain rhythms across the lifespan, while P600Norm investigates language-related brain responses using stationary and portable EEG.

{% include button.html link="/projects/" text="Browse our projects" tooltip="Browse our research projects" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/projects.png" link="/projects/" title="Our Projects" flip=true style="bare" text=text %}

{% capture text %}

Meet the researchers and students behind our models, software, and experiments. Our team brings together expertise in machine learning, neuroimaging, and clinical neuroscience at Tilburg University.

{% include button.html link="/team/" text="Meet our team" tooltip="Meet the ML4PNP team" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/team.png" link="/team/" title="Our Team" style="bare" text=text %}

{% capture text %}

Use our open-source tools for reproducible neuroimaging research. MEGaNorm connects EEG and MEG processing with normative modeling, and our contributions to PCNtoolkit support the study of individual variation in brain data.

{% include button.html link="/software/" text="Browse our software" tooltip="Browse our open-source software" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/software.png" link="/software/" title="Our Software" flip=true style="bare" text=text %}

{% capture text %}

Read our work on normative brain modeling, EEG and MEG, and machine learning for neuropsychiatry. Explore findings on lifespan brain dynamics alongside methods and tools for studying individual differences.

{% include button.html link="/publications/" text="See our publications" tooltip="Read our research publications" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/publications.png" link="/publications/" title="Our Publications" style="bare" text=text %}

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

[Meet our team]({{ '/team/' | relative_url }}) · [Contact the lab]({{ '/contact/' | relative_url }})

{% include section.html %}

## At Tilburg University

ML4PNP is part of the Computational Models of Brain and Behavior research unit within the Research Center for Cognitive Science and Artificial Intelligence, Tilburg School of Humanities and Digital Sciences, Tilburg University.

{% include figure.html image="images/Tilburg-University-Logo.png" link="https://www.tilburguniversity.edu/" caption="Tilburg University" width="280px" %}
