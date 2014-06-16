---
layout: page
title: Cows
permalink: /cows.html
cows: 
  - image: /images/cows/DSC00286.jpg
    name: "Bar L 248"
    sire: "Mr. LDC 202 Quasimoto"
    dam: "Miss LDC 302"
  - image: /images/cows/DSC00273.jpg
    name: "Bar L 238"
    sire: "Mr. LDC Quasimoto"
    dam: "BL Miss Bevo"
  - image: /images/cows/HorseStompMay205.jpg
    name: "HS Miss Imper DiMayro 67"
    sire: "MN Mayro Imperator 135/2"
    dam: "MS BO DiMayro Ronne 931"
  - image: /images/cows/DSC00016.jpg
    name: "Ms BO Mayro Suva 703"
    sire: "Taylor's King Suvacana"
    dam: "MN Miss Impomanso 641/2"
  - image: /images/cows/August07030.jpg
    name: "Ms Bayou Oaks Maysuva 633"
    sire: "Taylor's King Suvacana"
    dam: "MN Miss Mayro Impo 500/2"
  - image: /images/cows/DSCN0515.jpg
    name: "Miss Bayou Oaks 113"
    sire: "Mr. Sugar 364/1 "
    dam: "MN Miss Mayromanso 597/2"
  - image: /images/cows/July2009072.jpg
    name: "Ms Bayou Oaks Su Suva 648 "
    sire: "Taylor's King Suvacana"
    dam: "Miss Bayou Oaks 115"
  - image: /images/cows/July2009061.jpg
    name: "Ms BO Dirambo Mayro 930"
    sire: "Mr BO Mayro Didor 536 "
    dam: "ROHO Impermanso Lucky 1 "
  - image: /images/cows/DSC00170.JPG
    name: "Ms BO Dimayro Ronne 931 "
    sire: "Mr BO Didor Mayro 502 "
    dam: "MN Miss Impomanso 643/2"
  - image: /images/cows/DSC00036_2.jpg
    name: "Miss Diamond A 207/6 "
    sire: "(=) JDH Supercalc Manso 310/2 "
    dam: "Miss Diamond A 21/4 "
  - image: /images/cows/July2009166.jpg
    name: "Horse Stomp Lady Mayro Oyo 57 "
    sire: "(=) JDH 204/2 YL Manso "
    dam: "Ms BO Dixiecrata MN 608"
  - image: /images/cows/DSC00174.jpg
    name: "Ms Bayou Oaks 837 "
    sire: "Taylor's King Suvacana"
    dam: "Miss Bayou Oaks Mayro 100"
  - image: /images/cows/2013-09-27_18.44.42.jpg
    name: "HS Sara Imper Mayro 75"
    sire: "LD Didor Mayro 4"
    dam: "Ms BO Lazy L 17/0"
---

{% for cow in page.cows %}
  <div class='cow'>
    <img src='{{ cow.image }}'>
    <h2>{{ cow.name }}</h2>
    <p><strong>Sire: </strong>{{ cow.sire }}</p>
    <p><strong>Dam: </strong>{{ cow.dam }}</p>
  </div>
{% endfor %}
