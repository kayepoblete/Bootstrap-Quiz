"use strict"

const button = document.getElementById("myButton");

button.addEventListener("click", myFunction);

function myFunction(){
    const heroImage = document.getElementById("heroImage");
    heroImage.src = "/images/testimage2.jpg";
}