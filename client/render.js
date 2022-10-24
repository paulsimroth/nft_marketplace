//File for rendering Bears fetched from Smart Contracts

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

//Bear Box
function bearBox(id) {
    const bearDiv = `
            <div class="col-lg-4 pointer bearView" id="bearView` + id + `">
                <div class="featureBox ownersBear">
                `+ bearBody(id) + `
                </div>
                <div class="dnaDiv bearDna" id="bearDNA"></div>
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
            <li><span id="eyeName `+ id + `"></span> Eyes</li>                     
            <li><span id="decorationName `+ id + `"></span> Decoration</li>                     
            <li><span id="animationName `+ id + `"></span> Animation</li>                  
        </ul>`

    return attributes;
};

//Inventory of own bears is shown
function inventoryRender(dna, id, gen){
    const bearDnaStr = bearDna(dna);
    renderBear(bearDnaStr);
    

    console.log("inventoryRender", dna, id);

    const bearDiv = `
    <div class="col-lg-4 pointer bearView" id="bearView` + id + `">
        <div class="featureBox ownersBear id="ownersBear` + id + `">
        `+ bearBody(id) + `
        </div>
        <div class="dnaDiv bearDna" id="bearDNA"></div>
        
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>ID: </b>`+ id + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN: </b>`+ gen + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA: </b>`+ dna + `</h4></span>
        `+ attributes(id) + `
    </div>`;

    const bearView = $('#bearView' + id);
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