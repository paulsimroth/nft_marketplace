/*
Visibility of Color and Attribute selections
*/
let colorSection = document.querySelector("#bearColors");
let colorBtn = document.querySelector(".colorBtn");

let attributeSection = document.querySelector("#bearAttributes");
let attributeBtn = document.querySelector(".attributeBtn");

//Setting initial state
$( document ).ready(function() {
    toggleColorVis();
});

function toggleColorVis(){
    //visibility changed on click
    attributeSection.style.display = "none";
    colorSection.style.display = "block";
    //setting button colors
    colorBtn.style.backgroundColor = "#006600";
    attributeBtn.style.backgroundColor = "#166edacb";
}

function toggleAttributeVis(){
    //visibility changed on click
    colorSection.style.display = "none";
    attributeSection.style.display = "block";
    //setting button colors
    colorBtn.style.backgroundColor = "#166edacb";
    attributeBtn.style.backgroundColor = "#006600";
}

/*

*/