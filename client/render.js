//File for rendering Ctas fetched from Smart Contracts

//Splitting the cat DNA to use it in render
function bearDna(dnaStr) {
    let dna = {
        //Colors
        "headcolor": dnaStr.substring(0, 2),
        "mouthColor": dnaStr.substring(2, 4),
        "eyesColor": dnaStr.substring(4, 6),
        "earsColor": dnaStr.substring(6, 8),
        //Attributes
        "eyesShape": dnaStr.substring(8, 9),
        "decorationPattern": dnaStr.substring(9, 10),
        "decorationMidcolor": dnaStr.substring(10, 12),
        "decorationSidescolor": dnaStr.substring(12, 14),
        "animation": dnaStr.substring(14, 15),
        "lastNum": dnaStr.substring(15, 16)
    }
    return dna;
};

//Bear Box
function bearBox(id) {
    let bearDiv = `<div class="col-lg-4 pointer fit-content" id="bearView` + id + `">
                 <div class="featureBox ownersBear">
                 `+ bearBody(id) + `                           
                 </div>
                 <div class="dnaDiv" id="bearDNA`+ id + `"></div>
                 `+ attributes(id) + `
                </div>`;

    let bearView = $('#bearView' + id);
    if (!bearView.length) {
        $('#ownersBear').append(bearDiv)
    };
};

//Bear Body
function bearBody(id) {
    let bear = `<div class="bear">
                    <div class="hat">
                        <div `+ id +`class="hat-top"></div>
                        <div `+ id +`class="hat-brim"></div>
                    </div>
                    <div class="ears">
                        <div `+ id +`class="ear leftEar">
                            <div class="innerEar"></div>
                        </div>
                        <div `+ id +`class="ear rightEar">
                            <div class="innerEar"></div>
                        </div>
                    </div>
                    <div `+ id +`class="head">
                        <div `+ id +`class="eyes">
                            <div class="eye">
                                <span class="pupils"></span>
                            </div>
                            <div class="eye">
                                <span class="pupils"></span>
                            </div>
                        </div>
                        <div `+ id +`class="nose"></div>
                        <div `+ id +`class="mouth"></div>
                    </div>
                    <div class="body">
                        <div class="frontPaws">
                            <div `+ id +`class="frontPaw leftFrontPaw"></div>
                            <div `+ id +`class="frontPaw rightFrontPaw"></div>
                        </div>
                        <div `+ id +`class="belly"></div>
                        <div `+ id +`class="backPaws">
                            <div `+ id +`class="backPaw leftBackPaw"></div>
                            <div `+ id +`class="backPaw rightBackPaw"></div>
                        </div>
                    </div>
                </div> `
    return bear;
};

function attributes(id) {
    let attributes = 
        `<ul class="ml-5 cattributes">                     
            <li><span id="eyeName`+ id + `"></span> eyes</li>                     
            <li><span id="decorationName`+ id + `"></span> decoration</li>                     
            <li><span id="animationName`+ id + `"></span> animation</li>                  
        </ul>`

    return attributes;
};

function inventoryRender(id){

};

function breedRender(dna, id, generation, gender) {

};
