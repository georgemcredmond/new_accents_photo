"use strict";

/*
   Author: George McRedmond
   Date:   6/29/2018

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

window.addEventListener("load", setStyles);

function setStyles() {

   var styleNum = randInt(5);
   var newStyle = document.createElement("link");
   newStyle.setAttribute("rel", "stylesheet");   
   newStyle.setAttribute("id", "fancySheet");   
   newStyle.setAttribute("href",  "na_style_" + styleNum + ".css");
   document.head.appendChild(newStyle);
   
   
   var figBox = document.createElement("figure");
   figBox.setAttribute("id", "styleThumbs");
   document.getElementById("box").appendChild(figBox);
   
   // Create thumbnails for each style sheet
    
   for (var i = 0; i < 5; i++) {
      var sheetImg = document.createElement("img");
      sheetImg.setAttribute("src", "na_small_" + i + ".png");
      sheetImg.setAttribute("alt", "na_style_" + i + ".css");
      sheetImg.onclick = function(e) {
         document.getElementById("fancySheet").href = e.target.alt;
      };
      figBox.appendChild(sheetImg);
   }
   
   var thumbStyles = document.createElement("style");
   document.head.appendChild(thumbStyles); 
   
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "figure#styleThumbs { \
         position: absolute; \
         left: 0px; \
         bottom: 0px; \
      }", 0);
   
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "figure#styleThumbs img { \
         outline: 1px solid black; \
         cursor: pointer; \
         opacity: 0.75; \
      }", 1);
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "figure#styleThumbs img:hover { \
         outline: 1px solid red; \
         opacity: 1.0; \
      }", 2);
}


function randInt(size) {
   return Math.floor(size*Math.random());
}