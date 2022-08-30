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

//Appearance Variation
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

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
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


async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
};
