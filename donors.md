---
layout: page
title: Donors
permalink: /donors.html
donors:
  - image: "/images/donors/hs-110.jpg"
    name: "Horse Stomp Miss Mayronne 110"
    sire: "MN Mayro Imperator 135/2"
    dam: "Horse Stomp Ms Impo Mayro 49"
  - image: "/images/donors/hs-49.jpg"
    name: "Horse Stomp Miss Impo Mayro 49"
    sire: "LD Didor Mayro 4"
    dam: "Ms BO Dixiecrata MN 608"
  - image: "/images/donors/didor-2.jpg"
    name: "Horse Stomp Miss Imper Mayro 102"
    sire: "LD Didor Mayro 4"
    dam: "Ms BO Mayro Manso 31"
  - image: "/images/donors/didor.jpg"
    name: "Horse Stomp Miss Impo Mayro 20"
    sire: "LD Didor Mayro 4"
    dam: "Ms BO Dixiecrata MN 608"
  - image: "/images/donors/DSC00220.jpg"
    name: "MS BO Mayro Manso 31 "
    sire: "MN Mayro Manso 433/2 "
    dam: "MN Miss Impomanso 641/2"
  - image: "/images/donors/August07019.jpg"
    name: "MN Miss Impomanso 641/2"
    sire: "MN Mayromanso 629/2 "
    dam: "MN Miss Imperator 591/2"
  - image: "/images/donors/608.jpg"
    name: "MS BO Dixiecrata MN 608"
    sire: "Mr. Bayou Oaks Dixiecrata 74 "
    dam: "MN Miss Mayromanso 601/2"
  - image: "/images/donors/DSC00264.jpg"
    name: "Ms BO Dimayro Manso 814"
    sire: "Mr BO Didor Mayro 502 "
    dam: "+MN Miss Mayro 646/2"
  - image: "/images/donors/2013-09-27_18.29.52.jpg"
    name: "Ms BO Lazy L 17/0"
    sire: "Mr BO Sumanso Rex 720 "
    dam: "=MN Mayro 650/2"
  - image: "/images/donors/DSC00267.jpg"
    name: "Miss Diamond A 200/6"
    sire: "(=) JDH Supercalc Manso 310/2"
    dam: "Miss Diamond A  21/4"
---

{% for donor in page.donors %}
  <div class='cow'>
    <img src='{{ donor.image }}'>
    <h2>{{ donor.name }}</h2>
    <p><strong>Sire: </strong>{{ donor.sire }}</p>
    <p><strong>Dam: </strong>{{ donor.dam }}</p>
  </div>
{% endfor %}
