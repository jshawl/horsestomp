---
layout: page
title: For Sale
permalink: /forsale.html
cows:
  - name: Sir Holiday Mayro 161
    extra: "DOB: 11/06/13<br> Sire: +LL MR DOC HOLIDAY 539 ~ ABBA# 779252<br> Dam: MS BO MAYO MANSO 31 ~ ABBA# 820043"
    images:
      - /images/for-sale/sir-holiday-mayro-161-1.jpeg
      - /images/for-sale/sir-holiday-mayro-161-2.jpeg
      - /images/for-sale/sir-holiday-mayro-161-3.jpeg
  - name: King Imperator Mayro MN 127/1
    extra: "DOB: 03-28-11 · ABBA# 897398"
    images:
      - /images/for-sale/7357.jpg
      - /images/for-sale/7375.jpg
      - /images/for-sale/ki-3.jpeg
  - name: Horse Stomp 68 ~ Golden Certified F-1 Show Heifer Prospect
    extra: ""
    images:
      - /images/for-sale/hs68-1.jpeg
      - /images/for-sale/hs68-2.jpeg
      - /images/for-sale/hs68-3.jpeg
  - name: Horse Stomp 105 ~ Golden Certified F-1 Show Heifer Prospect
    extra: ""
    images:
      - /images/for-sale/hs105-1.jpeg
      - /images/for-sale/hs105-2.jpeg
      - /images/for-sale/hs105-3.jpeg
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
