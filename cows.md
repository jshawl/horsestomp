---
layout: page
title: Cows
permalink: /cows.html
cows: 
  - image: /images/cows/DSC00286.jpg
    name: "Bar L 248"
    sire: "Mr. LDC 202 Quasimoto"
    dam: "Miss LDC 302"
---

{% for cow in page.cows %}
  <div class='cow'>
    <img src='{{ cow.image }}'>
    <h2>{{ cow.name }}</h2>
    <p><strong>Sire: </strong>{{ cow.sire }}</p>
    <p><strong>Dam: </strong>{{ cow.dam }}</p>
  </div>
{% endfor %}
