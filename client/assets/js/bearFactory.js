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

//This function code needs to modified so that it works with Your cat code.
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

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
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

async function normalEyes() {
    await $('.eye').find('span').css('border', 'none')
};

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
};
