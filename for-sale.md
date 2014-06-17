---
layout: page
title: For Sale
permalink: /forsale.html
cows:
  - name: Horse Stomp Mayronne 155
    extra: "DOB:  9/24/13<br> Sire:  -MN MAYRO 662/2 ABBA# 649806<br> Dam: MS BO MAYRO MANSO ABBA# 820043"
    images:
      - /images/for-sale/mayronne-155-1.jpeg
      - /images/for-sale/mayronne-155-2.jpeg
      - /images/for-sale/mayronne-155-3.jpeg
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
