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
Button Get random Bear
*/
function randomBear(){
    //Head
    let rndHead = Math.floor(Math.random() * 89) + 10;//random number
    headColor(colors[rndHead],rndHead);//setting bear
    $('#bodycolor').val(rndHead);

    //Mouth, Belly & Nose Color
    let rndMouth = Math.floor(Math.random() * 89) + 10;
    mouthColor(colors[rndMouth],rndMouth);
    $('#mouthcolor').val(rndMouth);

    //Eye Color
    let rndEyes = Math.floor(Math.random() * 89) + 10;
    eyesColor(colors[rndEyes],rndEyes);
    $('#eyescolor').val(rndEyes);

    //Ear & Paw Color
    let rndEars = Math.floor(Math.random() * 89) + 10;
    earsColor(colors[rndEars],rndEars);
    $('#earscolor').val(rndEars);

    //Eye Shape
    let rndEyeShape = Math.floor(Math.random() * 7) + 1;
    eyeVariation(rndEyeShape);
    $('#eyesshape').val(rndEyeShape);

    //Hat Shape
    let rndHatShape = Math.floor(Math.random() * 7) + 1;
    decorationVariation(rndHatShape);
    $('#hatshape').val(rndHatShape);

    //Hat Top Color
    let rndHatTop = Math.floor(Math.random() * 89) + 10;
    decorationColor1(colors[rndHatTop], rndHatTop);
    $('#hattopcolor').val(rndHatTop);

    //Hat Brim Color
    let rndHatBrim = Math.floor(Math.random() * 89) + 10;
    decorationColor2(colors[rndHatBrim], rndHatBrim);
    $('#hatbrimcolor').val(rndHatBrim);

    //Animation
    let rndAnimation = Math.floor(Math.random() * 7) + 1;
    animationVariation(rndAnimation);
    $("#animation").val(rndAnimation);
}

/*
Button Default Bear calls on renderBear(defaultDna) in bearSettings.js
*/

/*
Button Create New Bear in index.js
*/