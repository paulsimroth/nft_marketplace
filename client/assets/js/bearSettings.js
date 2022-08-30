
var colors = Object.values(allColors())

var defaultDNA = {
  "headColor" : 10,
  "mouthColor" : 19,
  "eyesColor" : 29,
  "earsColor" : 21,
  //Attributes
  "eyesShape" : 1,
  "decorationPattern" : 1,
  "decorationMidcolor" : 13,
  "decorationSidescolor" : 13,
  "animation" :  1,
  "lastNum" :  1
}

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderBear(defaultDNA)
});

function getDna(){
  var dna = ''
  dna += $('#dnabody').html()
  dna += $('#dnamouth').html()
  dna += $('#dnaeyes').html()
  dna += $('#dnaears').html()
  dna += $('#dnashape').html()
  dna += $('#dnadecoration').html()
  dna += $('#dnadecorationMid').html()
  dna += $('#dnadecorationSides').html()
  dna += $('#dnaanimation').html()
  dna += $('#dnaspecial').html()

  return parseInt(dna)
}

function renderBear(dna){
  headColor(colors[dna.headColor],dna.headColor)
  $('#bodycolor').val(dna.headColor)

  mouthColor(colors[dna.mouthColor],dna.mouthColor)
  $('#mouthcolor').val(dna.mouthColor)

  eyesColor(colors[dna.eyesColor],dna.eyesColor)
  $('#eyescolor').val(dna.eyesColor)

  earsColor(colors[dna.earsColor],dna.earsColor)
  $('#earscolor').val(dna.earsColor)

  eyeVariation(dna.eyesShape)
  $('#eyesshape').val(dna.eyesShape)
}

// Changing bear attributes
$('#bodycolor').change(()=>{
  var colorVal = $('#bodycolor').val()
  headColor(colors[colorVal],colorVal)
});

$('#mouthcolor').change(()=>{
  var colorVal = $('#mouthcolor').val()
  mouthColor(colors[colorVal],colorVal)
});

$('#eyescolor').change(()=>{
  var colorVal = $('#eyescolor').val()
  eyesColor(colors[colorVal],colorVal)
});

$('#earscolor').change(()=>{
  var colorVal = $('#earscolor').val()
  earsColor(colors[colorVal],colorVal)
});

$('#eyesshape').change(()=>{
  var shape = parseInt($('#eyesshape').val())
  eyeVariation(shape)
});