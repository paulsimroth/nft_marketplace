/*
*FUNCTIONS FROM bearFactory.js WITH ID FOR CATALOG
*/

//Color Variations
function headColorById(color, id) {
    $('#rightEar'+ id +', #leftEar'+ id +', #head'+ id +', #body'+ id).css('background', '#' + color);
    console.log("headColorById","color:", color, "id", id);
};

function mouthColorById(color, id) {
    $('#mouth'+ id +', #nose'+ id +', #belly'+ id).css('background', '#' + color); 
};

function eyesColorById(color, id) {
    $('#rightPupil'+ id +', #leftPupil'+ id).css('background', '#' + color);  
};

function earsColorById(color, id) {
    $('#rightInnerEar'+ id +', #rightFrontPaw'+ id +', #rightBackPaw'+ id).css('background', '#' + color); 
    $('#leftInnerEar'+ id +', #leftFrontPaw'+ id +', #leftBackPaw'+ id).css('background', '#' + color);  
};

function decorationColor1ById(color, id) {
    $('#hat-top'+ id).css('background', '#' + color);  
};

function decorationColor2ById(color, id) {
    $('#hat-brim'+ id).css('background', '#' + color);   
};

//Eye Variation
function eyeVariationById(num, id) {
    switch (num) {
        case 1:
            normalEyesById(id)
            $('#eyeName'+ id).html('Basic')
            break;
        case 2:
            normalEyesById(id)
            $('#eyeName'+ id).html('Eyelid down')
            eyesType2ById(id)
            break;
        case 3:
            normalEyesById(id)
            $('#eyeName'+ id).html('Eyelid up')
            eyesType3ById(id)
            break;
        case 4:
            normalEyesById(id)
            $('#eyeName'+ id).html('Schock')
            eyesType4ById(id)
            break;
        case 5:
            normalEyesById(id)
            $('#eyeName'+ id).html('Unset')
            eyesType5ById(id)
            break;
        case 6:
            normalEyesById(id)
            $('#eyeName'+ id).html('Square')
            eyesType6ById(id)
            break;
        case 7:
            normalEyesById(id)
            $('#eyeName'+ id).html('Up')
            eyesType7ById(id)
            break;
        default:
            $('#eyeName'+ id).html('INVALID')
            break;
    }
};

//Eye types
function normalEyesById(id) {
    //all variantions are reset to default
    $('#eyes'+ id).find('span').css('border', 'none')
    $('#eyes'+ id).find('span').css('width', '35px')
    $('#eyes'+ id).find('span').css('position', 'absolute')
    $('#eyes'+ id).find('span').css('border-radius', '50%')
    $('#eyes'+ id).find('span').css('top', '10px')
};

function eyesType2ById(id) {
    $('#eyes'+ id).find('span').css('border-top', '15px solid ')
};

function eyesType3ById(id) {
    $('#eyes'+ id).find('span').css('border-bottom', '15px solid')
};

function eyesType4ById(id) {
    $('#eyes'+ id).find('span').css('width', '25px')
};

function eyesType5ById(id) {
    $('#eyes'+ id).find('span').css('position', 'unset')
};

function eyesType6ById(id) {
    $('#eyes'+ id).find('span').css('border-radius', '0 0 0 0')
};

function eyesType7ById(id) {
    $('#eyes'+ id).find('span').css('top', '1px')
};

//Hat Variations
function decorationVariationById(num, id) {
    switch (num) {
        case 1:
            $('#decorationName'+ id).html('Basic')
            normaldecorationById(id)
            break;
        case 2:
            normaldecorationById(id)
            $('#decorationName'+ id).html('Tophat')
            decorationPattern2ById(id)
            break;
        case 3:
            normaldecorationById(id)
            $('#decorationName'+ id).html('Hat with No Brim')
            decorationPattern3ById(id)
            break;
        case 4:
            normaldecorationById(id)
            $('#decorationName'+ id).html('Big Hat')
            decorationPattern4ById(id)
            break;
        case 5:
            normaldecorationById(id)
            $('#decorationName'+ id).html('Small Hat')
            decorationPattern5ById(id)
            break;
        case 6:
            normaldecorationById(id)
            $('#decorationName'+ id).html('Cap')
            decorationPattern6ById(id)
            break;
        case 7:
            normaldecorationById(id)
            $('#decorationName'+ id).html('No Hat')
            decorationPattern7ById(id)
            break;
        }
};

//Hat Types
async function normaldecorationById(id) {
    //Remove all style from other decorations
    $('#hat-top'+ id).css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "top": "0px", "visibility": "visible"})
    $('#hat-brim'+ id).css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern2ById(id) {
    $('#hat-top'+ id).css({"height": "70px", "width": "90px", "left": "93px", "border-radius": "0 0 0 0", "top": "-18px", "visibility": "visible"})
    $('#hat-brim'+ id).css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern3ById(id) {
    $('#hat-top'+ id).css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "90px", "top": "45px", "left": "93px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern4ById(id) {
    $('#hat-top'+ id).css({"height": "50px", "width": "120px", "left": "78px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "200px", "top": "45px", "left": "39px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern5ById(id) {
    $('#hat-top'+ id).css({"height": "38px", "width": "47px", "left": "113px","top": "6px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "85px", "top": "38px", "left": "95px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern6ById(id) {
    $('#hat-top'+ id).css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "120px", "top": "45px", "left": "63px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern7ById(id) {
    $('#hat-top'+ id).css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "hidden" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "hidden" })
};

//Animations
function animationVariationById(num, id){
    
    switch (num) {
        case 1:
            animationType1ById(id);
            $('#animationName'+ id).html('Moving Head');
            break;
        case 2: 
            animationType2ById(id);
            $('#animationName'+ id).html('Moving Front Paw');
            break;
        case 3: 
            animationType3ById(id);
            $('#animationName'+ id).html('Moving Ears');
            break;
        case 4: 
            animationType4ById(id);
            $('#animationName'+ id).html('Moving Belly');
            break; 
        case 5: 
            animationType5ById(id);
            $('#animationName'+ id).html('Sliding Hat');
            break;
        case 6: 
            animationType6ById(id);
            $('#animationName'+ id).html('Wiggling Nose');
            break; 
        case 7: 
            animationType7ById(id);
            $('#animationName'+ id).html('Moving Mouth');
            break;        
        default:
            break;
    }
};

//reset animation
function resetAnimationById(id) {
    $('#head'+ id).removeClass("movingHead");
    $('#leftFrontPaw'+ id).removeClass("wavingPaw");
    $('#ear'+ id).removeClass("movingEars");
    $('#belly'+ id).removeClass("movingBelly");
    $('#hat'+ id).removeClass("movingHat");
    $('#nose'+ id).removeClass("movingNose");
    $('#mouth'+ id).removeClass("movingMouth");
};

//animations
function animationType1ById(id){
    resetAnimationById(id);
    $('#head'+ id).addClass("movingHead");
};

function animationType2ById(id){
    resetAnimationById(id);
    $('#leftFrontPaw'+ id).addClass("wavingPaw");
};

function animationType3ById(id){
    resetAnimationById(id);
    $('#ear'+ id).addClass("movingEars");
};

function animationType4ById(id){
    resetAnimationById(id);
    $('#belly'+ id).addClass("movingBelly");
};

function animationType5(id){
    resetAnimationById(id);
    $('#hat'+ id).addClass("movingHat");
};

function animationType6ById(id){
    resetAnimationById(id);
    $('#nose'+ id).addClass("movingNose");
};

function animationType7ById(id){
    resetAnimationById(id);
    $('#mouth'+ id).addClass("movingMouth");
};