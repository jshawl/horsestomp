---
layout: page
title: For Sale
permalink: /forsale.html
cows:
  - name: Kempfer Cattle Company 410
    extra: "DOB: December 2010<br> ABBA# 905917, **Calving-Ease Herd Sire with excellent maternal Performance Traits. Current BSE, Ready to work.**"
    images:
      - /images/for-sale/410-2016.jpg
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
