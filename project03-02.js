/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Aaron Sochor
      Date: 7 January 2023  

      Filename: project03-02.js
*/

window.addEventListener("load", function () {
    let caption = new Array(14);
    caption[0] = "International Space Station fourth expansion [2009]";
    caption[1] = "Assembling the International Space Station [1998]";
    caption[2] = "The Atlantis docks with the ISS [2001]";
    caption[3] = "The Atlantis approaches the ISS [2000]";
    caption[4] = "The Atlantis approaches the ISS [2000]";
    caption[5] = "International Space Station over Earth [2002]";
    caption[6] = "The International Space Station first expansion [2002]";
    caption[7] = "Hurricane Ivan from the ISS [2008]";
    caption[8] = "The Soyuz spacecraft approaches the ISS [2005]";
    caption[9] = "The International Space Station from above [2006]";
    caption[10] = "Maneuvering in space with the Canadarm2 [2006]";
    caption[11] = "The International Space Station second expansion [2006]";
    caption[12] = "The International Space Station third expansion [2007]";
    caption[13] = "The ISS over the Ionian Sea [2007]";
  
    let htmlCode = "";
    for (let i = 0; i < caption.length; i++) {
      htmlCode += `
        <figure>
          <img alt="" src="slide1.jpg" />
          <figcaption>${caption[i]}</figcaption>
        </figure>
      `;
    }
  
    document.getElementById("gallery").innerHTML = htmlCode;
  });