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
            <div class="col-lg-4 pointer  ownersBearsDiv" id="bearView` + id + `">
                <div class="featureBox ownersBear">
                `+ bearBody(id) + `                                                                                                      
                </div>
                <div class="dnaDiv bearDna" id="bearDNA"></div>
                `+ attributes(id) + `
            </div>`;

    const bearView = $('.ownersBearsDiv' + id);
    if (!bearView.length) {
        $('.ownersBearsDiv').append(bearDiv)
    };
};

//Bear Body
function bearBody() {
    const bear = `<div class="bear">
                    <div class="hat">
                        <div class="hat-top"></div>
                        <div class="hat-brim"></div>
                    </div>
                    <div class="ears">
                        <div class="ear leftEar">
                            <div class="innerEar"></div>
                        </div>
                        <div class="ear rightEar">
                            <div class="innerEar"></div>
                        </div>
                    </div>
                    <div class="head">
                        <div class="eyes">
                            <div class="eye">
                                <span class="pupils"></span>
                            </div>
                            <div class="eye">
                                <span class="pupils"></span>
                            </div>
                        </div>
                        <div class="nose"></div>
                        <div class="mouth"></div>
                    </div>
                    <div class="body">
                        <div class="frontPaws">
                            <div class="frontPaw leftFrontPaw"></div>
                            <div class="frontPaw rightFrontPaw"></div>
                        </div>
                        <div class="belly"></div>
                        <div class="backPaws">
                            <div class="backPaw leftBackPaw"></div>
                            <div class="backPaw rightBackPaw"></div>
                        </div>
                    </div>
                </div> `
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

function inventoryRender(dna, id, gen){
    const bearDnaStr = bearDna(dna);
    renderBear(bearDnaStr);
    bearBox(id);

    console.log("inventoryRender", dna, id);

    document.querySelector('.bearDna').innerHTML =`
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>ID:</b>`+ id + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>
    `;
};

function breedRender(dna, id, gen, gender) {
    const bearDnaStr = bearDna(dna);
    renderBear(bearDnaStr);
    bearBox(id);

    console.log("breedRender", dna, id);

    $('#bearDna' + id).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>`)

    $('#bearView' + id).attr('onclick', 'selectBreed("' + dna + '","' + id + '","' + gen + '","' + gender + '")')
};

//TEST FOR OTHER RENDERING FUNCTION SOLUTION

function testRender(dna, id, gen){
    const bearDnaStr = bearDna(dna);
    const bear = document.querySelector(".ownersBearsDiv").innerHTML =`
    <div class="ownersBear">
        <div class="bear">
            <div class="hat">
                <div class="hat-top"></div>
                <div class="hat-brim"></div>
            </div>
            <div class="ears">
                <div class="ear leftEar">
                    <div class="innerEar"></div>
                </div>
                <div class="ear rightEar">
                    <div class="innerEar"></div>
                </div>
            </div>
            <div class="head">
                <div class="eyes">
                    <div class="eye">
                        <span class="pupils"></span>
                    </div>
                    <div class="eye">
                        <span class="pupils"></span>
                    </div>
                </div>
                <div class="nose"></div>
                <div class="mouth"></div>
            </div>
            <div class="body">
                <div class="frontPaws">
                    <div class="frontPaw leftFrontPaw"></div>
                    <div class="frontPaw rightFrontPaw"></div>
                </div>
                <div class="belly"></div>
                <div class="backPaws">
                    <div class="backPaw leftBackPaw"></div>
                    <div class="backPaw rightBackPaw"></div>
                </div>
            </div>
        </div>
        <br>
        <div class="dnaDiv" id="bearDNA"></div>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>ID:</b>`+ id + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>
    </div>
    `;
    renderBear(bearDnaStr);
    const bearView = $('.ownersBearsDiv' + id);
    if (!bearView.length) {
        $('.ownersBearsDiv').append(bearDiv)
    };
    console.log("testRender", dna, id);
}