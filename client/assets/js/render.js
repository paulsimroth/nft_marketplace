//File for rendering Bears fetched from Smart Contracts
var colors = Object.values(allColors())

//Splitting the cat DNA to use it in render
function bearDna(dnaStr) {
    const bearDna = {
        //Colors
        "headColor": dnaStr.toString().substring(0, 2),
        "mouthColor": dnaStr.toString().substring(2, 4),
        "eyesColor": dnaStr.toString().substring(4, 6),
        "earsColor": dnaStr.toString().substring(6, 8),
        //Attributes
        "eyesShape": dnaStr.toString().substring(8, 9),
        "decorationPattern": dnaStr.toString().substring(9, 10),
        "decorationMidcolor": dnaStr.toString().substring(10, 12),
        "decorationSidescolor": dnaStr.toString().substring(12, 14),
        "animation": dnaStr.toString().substring(14, 15),
        "lastNum": dnaStr.toString().substring(15, 16)
    };

    console.log("bearDna", bearDna);

    return bearDna;
};

function renderBearWithId(dna, id){
    const toNumber = (value) => parseInt(value.toString()); 

    const _headColor = toNumber(dna.headColor);
    const _mouthColor = toNumber(dna.mouthColor);
    const _eyesColor = toNumber(dna.eyesColor);
    const _earsColor = toNumber(dna.earsColor);
    const _eyesShape = toNumber(dna.eyesShape);
    const _decorationPattern = toNumber(dna.decorationPattern);
    const _decorationMidcolor = toNumber(dna.decorationMidcolor);
    const _decorationSidescolor = toNumber(dna.decorationSidescolor);
    const _animation = toNumber(dna.animation);

    console.log("renderBearWithId", "DNA:", dna, "ID:", id);

    headColor(colors[_headColor], id);
  
    mouthColor(colors[_mouthColor], id);
  
    eyesColor(colors[_eyesColor], id);
  
    earsColor(colors[_earsColor], id);
  
    eyeVariation(_eyesShape, id);
  
    decorationVariation(_decorationPattern, id);
  
    decorationColor1(colors[_decorationMidcolor], id);
  
    decorationColor2(colors[_decorationSidescolor], id);
    
    animationVariation(_animation, id);
  };

//Bear Box
function bearBox(id) {
    const bearDiv = `
            <div class="col-lg-4 pointer bearView" id="bearView` + id + `">
                <div class="featureBox ownersBear">
                `+ bearBody(id) + `
                </div>
                <div class="dnaDiv bearDna" id="bearDNA` + id + `"></div>
                `+ attributes(id) + `
            </div>`;

    const bearView = $('#bearView' + id);
    if (!bearView.length) {
        $('#bearView').append(bearDiv)
    };
};

//Bear Body
function bearBody(id) {
    const bear = `                
    <div id="bear`+ id +`" class="bear">
        <div id="hat`+ id +`" class="hat">
            <div id="hat-top`+ id +`" class="hat-top"></div>
            <div id="hat-brim`+ id +`" class="hat-brim"></div>
        </div>
        <div id="ears`+ id +`" class="ears">
            <div id="leftEar`+ id +`" class="ear leftEar">
                <div id="leftInnerEar`+ id +`" class="innerEar"></div>
            </div>
            <div id="rightEar`+ id +`" class="ear rightEar">
                <div id="rightInnerEar`+ id +`" class="innerEar"></div>
            </div>
        </div>
        <div id="head`+ id +`" class="head">
            <div id="eyes`+ id +`" class="eyes">
                <div id="leftEye`+ id +`" class="eye">
                    <span id="leftPupil`+ id +`" class="pupils"></span>
                </div>
                <div id="rightEye`+ id +`" class="eye">
                    <span id="rightPupil`+ id +`" class="pupils"></span>
                </div>
            </div>
            <div id="nose`+ id +`" class="nose"></div>
            <div id="mouth`+ id +`" class="mouth"></div>
        </div>
        <div id="body`+ id +`" class="body">
            <div id="frontPaws`+ id +`" class="frontPaws">
                <div id="leftFrontPaw`+ id +`" class="frontPaw leftFrontPaw"></div>
                <div id="rightFrontPaw`+ id +`" class="frontPaw rightFrontPaw"></div>
            </div>
            <div id="belly`+ id +`" class="belly"></div>
            <div id="backPaws`+ id +`" class="backPaws">
                <div id="leftBackPaw`+ id +`" class="backPaw leftBackPaw"></div>
                <div id="rightBackPaw`+ id +`" class="backPaw rightBackPaw"></div>
            </div>
        </div>
    </div>`

    return bear;
};

//Attribute description
function attributes(id) {
    const attributes = 
        `<ul class="ml-5 attributes">                     
            <li><span id="eyeName`+ id + `"></span> Eyes</li>                     
            <li><span id="decorationName`+ id + `"></span> Decoration</li>                     
            <li><span id="animationName`+ id + `"></span> Animation</li>                  
        </ul>`

    return attributes;
};

//Inventory of own bears is shown
function inventoryRender(dna, id, gen){
    const dnaNum = dna.toNumber();
    const idNum = id.toNumber();
    const bearDnaStr = bearDna(dnaNum);
    renderBearWithId(bearDnaStr, idNum);
    
    console.log("inventoryRender", dnaNum, idNum);

    const bearDiv = `
    <div class="col-lg-4 pointer bearView" id="bearView` + idNum + `">
        <div class="featureBox ownersBear id="ownersBear` + idNum + `">
        `+ bearBody(idNum) + `
        </div>
        <div class="dnaDiv bearDna" id="bearDNA` + idNum + `"></div>
        
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>ID: </b>`+ id + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN: </b>`+ gen + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA: </b>`+ dna + `</h4></span>
        `+ attributes(idNum) + `
    </div>`;

    const bearView = $('#bearView' + idNum);

    if (!bearView.length) {
        $('#bearView').append(bearDiv)
    };
};

//breeding page
/* function breedRender(dna, id, gen, gender) {
    const bearDnaStr = bearDna(dna);
    renderBear(bearDnaStr);
    bearBox(id);

    console.log("breedRender", dna, id);

    $('#bearDna' + id).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>`)

    $('#bearView' + id).attr('onclick', 'selectBreed("' + dna + '","' + id + '","' + gen + '","' + gender + '")')
}; */