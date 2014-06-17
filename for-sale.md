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
  - name: Golden Certified F-1 Braford Heifers
    images:
      - /images/for-sale/golden-certified-f-1-bradford-heifers-1.jpeg
      - /images/for-sale/golden-certified-f-1-bradford-heifers-2.jpeg
      - /images/for-sale/golden-certified-f-1-bradford-heifers-3.jpeg
      - /images/for-sale/golden-certified-f-1-bradford-heifers-4.jpeg
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
