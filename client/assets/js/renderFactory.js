/*
*FUNCTIONS FROM bearFactory.js WITH ID FOR CATALOG
*/

//Color Variations
function headColor(color,code ,id) {
    $('#rightEar'+ id +', #leftEar'+ id +', #head'+ id +', #body'+ id +'').css('background', '#' + color);  //This changes the color of the bear
    $('#headcode').html('code: '+ code); //This updates text of the badge next to the slider
    $('#dnabody').html(code); //This updates the body color part of the DNA that is displayed below the bear
};

function mouthColor(color,code, id) {
    $('#mouth'+ id +', #nose'+ id +', #belly'+ id +'').css('background', '#' + color); 
    $('#mouthcode').html('code: '+ code); 
    $('#dnamouth').html(code); 
};

function eyesColor(color,code, id) {
    $('#rightPupil'+ id +', #leftPupil'+ id +'').css('background', '#' + color);  
    $('#eyescode').html('code: '+ code); 
    $('#dnaeyes').html(code); 
};

function earsColor(color,code, id) {
    $('#rightInnerEar'+ id +', #rightFrontPaw'+ id +', #rightBackPaw'+ id +'').css('background', '#' + color); 
    $('#leftInnerEar'+ id +', #leftFrontPaw'+ id +', #leftBackPaw'+ id +'').css('background', '#' + color);  
    $('#earscode').html('code: '+ code); 
    $('#dnaears').html(code); 
};

function decorationColor1(color,code, id) {
    $('#hat-top'+ id +'').css('background', '#' + color);  
    $('#decorationColor1').html('code: '+ code); 
    $('#dnadecorationMid').html(code); 
};

function decorationColor2(color,code, id) {
    $('#hat-brim'+ id +'').css('background', '#' + color);  
    $('#decorationColor2').html('code: '+ code); 
    $('#dnadecorationSides').html(code); 
};

//Eye Variation
function eyeVariation(num, id) {
    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes(id)
            $('#eyeName'+ id).html('Basic')
            break;
        case 2:
            normalEyes(id)
            $('#eyeName'+ id).html('Eyelid down')
            eyesType2(id)
            break;
        case 3:
            normalEyes(id)
            $('#eyeName'+ id).html('Eyelid up')
            eyesType3(id)
            break;
        case 4:
            normalEyes(id)
            $('#eyeName'+ id).html('Schock')
            eyesType4(id)
            break;
        case 5:
            normalEyes(id)
            $('#eyeName'+ id).html('Unset')
            eyesType5(id)
            break;
        case 6:
            normalEyes(id)
            $('#eyeName'+ id).html('Square')
            eyesType6(id)
            break;
        case 7:
            normalEyes(id)
            $('#eyeName'+ id).html('Up')
            eyesType7(id)
            break;
        default:
            $('#eyeName'+ id).html('INVALID')
            break;
    }
};

//Eye types
function normalEyes(id) {
    //all variantions are reset to default
    $('#eyes'+ id).find('span').css('border', 'none')
    $('#eyes'+ id).find('span').css('width', '35px')
    $('#eyes'+ id).find('span').css('position', 'absolute')
    $('#eyes'+ id).find('span').css('border-radius', '50%')
    $('#eyes'+ id).find('span').css('top', '10px')
};
id
function eyesType2(id) {
    $('#eyes'+ id).find('span').css('border-top', '15px solid ')
};

function eyesType3(id) {
    $('#eyes'+ id).find('span').css('border-bottom', '15px solid')
};

function eyesType4(id) {
    $('#eyes'+ id).find('span').css('width', '25px')
};

function eyesType5(id) {
    $('#eyes'+ id).find('span').css('position', 'unset')
};

function eyesType6(id) {
    $('#eyes'+ id).find('span').css('border-radius', '0 0 0 0')
};

function eyesType7(id) {
    $('#eyes'+ id).find('span').css('top', '1px')
};

//Hat Variations
function decorationVariation(num, id) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName'+ id).html('Basic')
            normaldecoration(id)
            break;
        case 2:
            normaldecoration(id)
            $('#decorationName'+ id).html('Tophat')
            decorationPattern2(id)
            break;
        case 3:
            normaldecoration(id)
            $('#decorationName'+ id).html('Hat with No Brim')
            decorationPattern3(id)
            break;
        case 4:
            normaldecoration(id)
            $('#decorationName'+ id).html('Big Hat')
            decorationPattern4(id)
            break;
        case 5:
            normaldecoration(id)
            $('#decorationName'+ id).html('Small Hat')
            decorationPattern5(id)
            break;
        case 6:
            normaldecoration(id)
            $('#decorationName'+ id).html('Cap')
            decorationPattern6(id)
            break;
        case 7:'+ id +'
            normaldecoration(id)
            $('#decorationName'+ id).html('No Hat')
            decorationPattern7(id)
            break;
        }
};

//Hat Types
async function normaldecoration(id) {
    //Remove all style from other decorations
    $('#hat-top'+ id).css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "top": "0px", "visibility": "visible"})
    $('#hat-brim'+ id).css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern2(id) {
    $('#hat-top'+ id).css({"height": "70px", "width": "90px", "left": "93px", "border-radius": "0 0 0 0", "top": "-18px", "visibility": "visible"})
    $('#hat-brim'+ id).css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern3(id) {
    $('#hat-top'+ id).css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "90px", "top": "45px", "left": "93px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern4(id) {
    $('#hat-top'+ id).css({"height": "50px", "width": "120px", "left": "78px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "200px", "top": "45px", "left": "39px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern5(id) {
    $('#hat-top'+ id).css({"height": "38px", "width": "47px", "left": "113px","top": "6px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "85px", "top": "38px", "left": "95px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern6(id) {
    $('#hat-top'+ id).css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "120px", "top": "45px", "left": "63px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern7(id) {
    $('#hat-top'+ id).css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "hidden" })
    $('#hat-brim'+ id).css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "hidden" })
};

//Animations
function animationVariation(num, id){'+ id +'
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            animationType1(id);
            $('#animationName'+ id).html('Moving Head');
            break;
        case 2: 
            animationType2(id);
            $('#animationName'+ id).html('Moving Front Paw');
            break;
        case 3: 
            animationType3(id);
            $('#animationName'+ id).html('Moving Ears');
            break;
        case 4: 
            animationType4(id);
            $('#animationName'+ id).html('Moving Belly');
            break; 
        case 5: 
            animationType5(id);
            $('#animationName'+ id).html('Sliding Hat');
            break;
        case 6: 
            animationType6(id);
            $('#animationName'+ id).html('Wiggling Nose');
            break; 
        case 7: 
            animationType7(id);
            $('#animationName'+ id).html('Moving Mouth');
            break;        
        default:
            break;
    }
};

//reset animation
function resetAnimation(id) {
    $('#head'+ id).removeClass("movingHead");
    $('#leftFrontPaw'+ id).removeClass("wavingPaw");
    $('#ear'+ id).removeClass("movingEars");
    $('#belly'+ id).removeClass("movingBelly");
    $('#hat'+ id).removeClass("movingHat");
    $('#nose'+ id).removeClass("movingNose");
    $('#mouth'+ id).removeClass("movingMouth");
};

//animations
function animationType1(id){
    resetAnimation(id);
    $('#head'+ id).addClass("movingHead");
};

function animationType2(id){
    resetAnimation(id);
    $('#leftFrontPaw'+ id).addClass("wavingPaw");
};

function animationType3(id){
    resetAnimation(id);
    $('#ear'+ id).addClass("movingEars");
};

function animationType4(id){
    resetAnimation(id);
    $('#belly'+ id).addClass("movingBelly");
};

function animationType5(id){
    resetAnimation(id);
    $('#hat'+ id).addClass("movingHat");
};

function animationType6(id){
    resetAnimation(id);
    $('#nose'+ id).addClass("movingNose");
};

function animationType7(id){
    resetAnimation(id);
    $('#mouth'+ id).addClass("movingMouth");
};