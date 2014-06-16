---
layout: page
title: Donors
permalink: /donors.html
donors: 
  - image: /images/cows/DSC00286.jpg
    name: "Bar L 248"
    sire: "Mr. LDC 202 Quasimoto"
    dam: "Miss LDC 302"
---

{% for donor in page.donors %}
  <div class='cow'>
    <img src='{{ donor.image }}'>
    <h2>{{ donor.name }}</h2>
    <p><strong>Sire: </strong>{{ donor.sire }}</p>
    <p><strong>Dam: </strong>{{ donor.dam }}</p>
  </div>
{% endfor %}
