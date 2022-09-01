//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
};

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors;
};

//Color Variations
function headColor(color,code) {
    $('.ear, .head, .body').css('background', '#' + color)  //This changes the color of the bear
    $('#headcode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the bear
};

function mouthColor(color,code) {
    $('.mouth, .nose, .belly').css('background', '#' + color) 
    $('#mouthcode').html('code: '+ code) 
    $('#dnamouth').html(code) 
};

function eyesColor(color,code) {
    $('.pupils').css('background', '#' + color)  
    $('#eyescode').html('code: '+ code) 
    $('#dnaeyes').html(code) 
};

function earsColor(color,code) {
    $('.innerEar, .frontPaw, .backPaw').css('background', '#' + color)  
    $('#earscode').html('code: '+ code) 
    $('#dnaears').html(code) 
};

function decorationColor1(color,code) {
    $('.hat-top').css('background', '#' + color)  
    $('#decorationColor1').html('code: '+ code) 
    $('#dnadecorationMid').html(code) 
};

function decorationColor2(color,code) {
    $('.hat-brim').css('background', '#' + color)  
    $('#decorationColor2').html('code: '+ code) 
    $('#dnadecorationSides').html(code) 
};

//Eye Variation
function eyeVariation(num) {
    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break;
        case 2:
            normalEyes()
            $('#eyeName').html('Eyelid down')
            eyesType2()
            break;
        case 3:
            normalEyes()
            $('#eyeName').html('Eyelid up')
            eyesType3()
            break;
        case 4:
            normalEyes()
            $('#eyeName').html('Schock')
            eyesType4()
            break;
        case 5:
            normalEyes()
            $('#eyeName').html('Unset')
            eyesType5()
            break;
        case 6:
            normalEyes()
            $('#eyeName').html('Square')
            eyesType6()
            break;
        case 7:
            normalEyes()
            $('#eyeName').html('Up')
            eyesType7()
            break;
        default:
            $('#eyeName').html('INVALID')
            break;
    }
};

//Eye types
function normalEyes() {
    //all variantions are reset to default
    $('.eye').find('span').css('border', 'none')
    $('.eye').find('span').css('width', '35px')
    $('.eye').find('span').css('position', 'absolute')
    $('.eye').find('span').css('border-radius', '50%')
    $('.eye').find('span').css('top', '10px')
};

function eyesType2() {
    $('.eye').find('span').css('border-top', '15px solid ')
};

function eyesType3() {
    $('.eye').find('span').css('border-bottom', '15px solid')
};

function eyesType4() {
    $('.eye').find('span').css('width', '25px')
};

function eyesType5() {
    $('.eye').find('span').css('position', 'unset')
};

function eyesType6() {
    $('.eye').find('span').css('border-radius', '0 0 0 0')
};

function eyesType7() {
    $('.eye').find('span').css('top', '1px')
};

//Hat Variations
function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break;
        case 2:
            normaldecoration()
            $('#decorationName').html('Tophat')
            decorationPattern2()
            break;
        case 3:
            normaldecoration()
            $('#decorationName').html('Hat with No Brim')
            decorationPattern3()
            break;
        case 4:
            normaldecoration()
            $('#decorationName').html('Big Hat')
            decorationPattern4()
            break;
        case 5:
            normaldecoration()
            $('#decorationName').html('Small Hat')
            decorationPattern5()
            break;
        case 6:
            normaldecoration()
            $('#decorationName').html('Cap')
            decorationPattern6()
            break;
        case 7:
            normaldecoration()
            $('#decorationName').html('No Hat')
            decorationPattern7()
            break;
        }
};

//Hat Types
async function normaldecoration() {
    //Remove all style from other decorations
    $('.hat-top').css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "top": "0px", "visibility": "visible"})
    $('.hat-brim').css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern2() {
    $('.hat-top').css({"height": "70px", "width": "90px", "left": "93px", "border-radius": "0 0 0 0", "top": "-18px", "visibility": "visible"})
    $('.hat-brim').css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern3() {
    $('.hat-top').css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('.hat-brim').css({"height": "7px", "width": "90px", "top": "45px", "left": "93px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern4() {
    $('.hat-top').css({"height": "50px", "width": "120px", "left": "78px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('.hat-brim').css({"height": "7px", "width": "200px", "top": "45px", "left": "39px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern5() {
    $('.hat-top').css({"height": "38px", "width": "47px", "left": "113px","top": "6px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('.hat-brim').css({"height": "7px", "width": "85px", "top": "38px", "left": "95px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern6() {
    $('.hat-top').css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "visible" })
    $('.hat-brim').css({"height": "7px", "width": "120px", "top": "45px", "left": "63px", "border-radius": "0 0 0 0", "visibility": "visible"})
};

function decorationPattern7() {
    $('.hat-top').css({"height": "50px", "width": "90px", "left": "93px", "border-radius": "85% 85% 25% 25%", "visibility": "hidden" })
    $('.hat-brim').css({"height": "7px", "width": "120px", "top": "45px", "left": "78px", "border-radius": "0 0 0 0", "visibility": "hidden" })
};

//Animations
function animationVariation(num){
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            animationType1();
            $('#animationName').html('Animation 1');
            break;
        case 2: 
            animationType2();
            $('#animationName').html('Animation 2');
            break;
        case 3: 
            animationType3();
            $('#animationName').html('Animation 3');
            break;
        case 4: 
            animationType4();
            $('#animationName').html('Animation 4');
            break; 
        case 5: 
            animationType5();
            $('#animationName').html('Animation 5');
            break;
        case 6: 
            animationType6();
            $('#animationName').html('Animation 6');
            break; 
        case 7: 
            animationType7();
            $('#animationName').html('Animation 7');
            break;        
        default:
            break;
    }
};

//reset animation
function resetAnimation() {
    $('.head').removeClass("movingHead");
};

//animations
function animationType1(){
    resetAnimation();
    $('.head').addClass("movingHead");
};

function animationType2(){
    resetAnimation();
    $('.head').addClass("movingHead");
};

function animationType3(){
    resetAnimation();
};

function animationType4(){
    resetAnimation();
};

function animationType5(){
    resetAnimation();
};

function animationType6(){
    resetAnimation();
};

function animationType7(){
    resetAnimation();
};