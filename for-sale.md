---
layout: page
title: For Sale
permalink: /forsale.html
cows:
---

<br>
Please call for purchasing inquiries on what we may have
available in the future.

{% for cow in page.cows %}
  <div class='cow'>
    {% for img in cow.images %}
      <img src='{{ img }}'>
    {% endfor %}
    <h2>{{ cow.name }}</h2>
    <p>{{ cow.extra }}</p>
  </div>
{% endfor %}
