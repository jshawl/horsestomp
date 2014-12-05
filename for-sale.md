---
layout: page
title: For Sale
permalink: /forsale.html
cows:
  - name: King Imperator Mayro MN 127/1
    extra: "DOB: 03-28-11 · ABBA# 897398"
    images:
      - /images/for-sale/7357.jpg
      - /images/for-sale/7375.jpg
      - /images/for-sale/ki-3.jpeg
---

{% for cow in page.cows %}
  <div class='cow'>
    {% for img in cow.images %}
      <img src='{{ img }}'>
    {% endfor %}
    <h2>{{ cow.name }}</h2>
    <p>{{ cow.extra }}</p>
  </div>
{% endfor %}
