---
layout: page
title: For Sale
permalink: /forsale.html
cows:
  - name: Horse Stomp 163
    extra: "DOB: May 2014<br> ABBA# Pending  ~ Sire: ABBA# 872820 x Dam: ABBA# 892868"
    images:
      - /images/for-sale/163.JPG
      - /images/for-sale/163-2.JPG
  - name: Horse Stomp Charlie De ImperManso Mayro 158
    extra: "DOB: September 2013<br> ABBA# 925091, **E.T. son of MN Mayro Manso 433/2**"
    images:
      - /images/for-sale/158.JPG
      - /images/for-sale/158-2.JPG
  - name: Kempfer Cattle Company 410
    extra: "DOB: December 2010<br> ABBA# 905917, **Calving-Ease Herd Sire with excellent maternal Performance Traits. Current BSE, Ready to work.**"
    images:
      - /images/for-sale/410.JPG
      - /images/for-sale/410-2.JPG
  - name: W4 Ranch 6058 Domino W440
    extra: "DOB: March 2009<br> AHA# 43020677, **Calving Ease. Used on Brahman Heifers. Current BSE. Ready to work.**"
    images:
      - /images/for-sale/w4.JPG
      - /images/for-sale/w4-2.JPG
  - name: Horse Stomp 63/5
    extra: "DOB: 2015<br> Golden Certified F-1 Braford Bull<br>Color: Dark Brown Brindle<br>Sire: W4 Ranch 6058 Domino W440 Bull<br>Dam: Horse Stomp Miss Imper DiMayro 63 	~ ABBA# 869349"
    images:
      - /images/for-sale/hs635.JPG
      - /images/for-sale/hs635-2.JPG
  - name: Horse Stomp 19/5
    extra: "DOB: 2015<br> Golden Certified F-1 Braford Bull<br>Color: Dark Brown Brindle<br>Sire: W4 Ranch 6058 Domino W440 Bull <br>Dam: Horse Stomp Miss Impo Mayro 19 ~ ABBA# 858028"
    images:
      - /images/for-sale/hs195.JPG
      - /images/for-sale/hs195-2.JPG
  - name: Horse Stomp 115/5
    extra: "DOB: 2015<br> Golden Certified F-1 Braford Bull<br>Color: Dark Brown Brindle<br>Sire: W4 Ranch 5058 Domino W440 Bull<br> Dam: Horse Stomp Miss Bo Mayro 115 ~ ABBA# 891541 "
    images:
      - /images/for-sale/hs1155.JPG
      - /images/for-sale/hs1155-2.JPG
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
