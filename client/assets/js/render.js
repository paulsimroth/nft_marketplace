//File for rendering Bears fetched from Smart Contracts
var colors = Object.values(allColors())

//Splitting the cat DNA to use it in render
function bearDna(dnaStr) {
    var bearDna = {
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

function renderBearWithId(bearDna, id){
    const toNumber = (value) => parseInt(value.toString()); 

    const _headColor = toNumber(bearDna.headColor);
    const _mouthColor = toNumber(bearDna.mouthColor);
    const _eyesColor = toNumber(bearDna.eyesColor);
    const _earsColor = toNumber(bearDna.earsColor);
    const _eyesShape = toNumber(bearDna.eyesShape);
    const _decorationPattern = toNumber(bearDna.decorationPattern);
    const _decorationMidcolor = toNumber(bearDna.decorationMidcolor);
    const _decorationSidescolor = toNumber(bearDna.decorationSidescolor);
    const _animation = toNumber(bearDna.animation);

    console.log("renderBearWithId", "DNA:", bearDna, "ID:", id);

    headColorById(colors[_headColor], id);
  
    mouthColorById(colors[_mouthColor], id);
  
    eyesColorById(colors[_eyesColor], id);
  
    earsColorById(colors[_earsColor], id);
  
    eyeVariationById(_eyesShape, id);
  
    decorationVariationById(_decorationPattern, id);
  
    decorationColor1ById(colors[_decorationMidcolor], id);
  
    decorationColor2ById(colors[_decorationSidescolor], id);
    
    animationVariationById(_animation, id);
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
    </div>`;

    return bear;
};

//Attribute description
function attributes(id) {
    const attributes = 
        `<ul class="ml-5 attributes id="attributes`+id+`">                     
            <li><span id="eyeName`+id+`"></span> Eyes</li>                     
            <li><span id="decorationName`+id+`"></span> Decoration</li>                     
            <li><span id="animationName`+id+`"></span> Animation</li>                  
        </ul>`;

    return attributes;
};

//Inventory of own bears is shown
function inventoryRender(dna, id, gen){
    var dnaNum = dna.toNumber();
    var idNum = id.toNumber();
    const bearDnaStr = bearDna(dnaNum);
    renderBearWithId(bearDnaStr, idNum);
    
    console.log("inventoryRender", dnaNum, idNum);

    const bearDiv = `
    <div class="col-lg-4 pointer bearView" id="bearView` + idNum + `">
    <a href="singleBear.html?bearId=` + idNum + `" class="bearLink">
        <div class="featureBox ownersBear" id="ownersBear` + idNum + `">
        `+ bearBody(idNum) + `
        </div>
    </a>
        <div class="dnaDiv bearDna" id="bearDNA` + idNum + `"></div>
        
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>ID: </b>`+ idNum + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN: </b>`+ gen + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA: </b>`+ dnaNum + `</h4></span>
        `+ attributes(idNum) + `
    </div>`;

    const bearView = $('#bearView' + idNum);

    if (!bearView.length) {
        $('#bearView').append(bearDiv)
    };
};


//Get a Single Bear 
async function getSingleBear(dna, id, gen) {
    var dnaNum = dna.toNumber();
    var idNum = id.toNumber();
    const bearDnaStr = bearDna(dnaNum);

    $('#singleBear').html(bearBody(idNum));

    renderBearWithId(bearDnaStr, idNum);

    $('#bearDNA').html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dnaNum + `</h4></span>
    `+ attributes(idNum) + `
    `);
    
    await bearOffer(idNum);
    
    console.log("getSingleBear", dnaNum, idNum);

};

//Set functions for trading on singleBear page
async function bearOffer(id) {
    var offer = await getOffers(id);
    var seller = offer.seller.toLocaleLowerCase()
    if (offer.onSale == true && seller != user) {
        $('#buyBox').removeClass('hidden');
        $('#priceBtn').html('<b>' + offer.price + ' ETH</b>');
        $('#buyBtn').attr('onclick', 'buyBear(' + id + ',"' + offer.price + '")');
    };

    var ownership = await bearOwnership(id);
    //If user owns token
    if (ownership == true) {        
        //If is not on sale
        if (offer.onSale == false) {
            $('#sellBox').removeClass('hidden');
            $('#sellBtn').attr('onclick', 'sellBear(' + id + ')');
        } else {
            $('#sellBox').removeClass('hidden');
            $('#cancelBox').removeClass('hidden');
            $('#cancelBtn').attr('onclick', 'deleteOffer(' + id + ')');
            $('#sellBtn').addClass('btn-success');
            $('#sellBtn').html('<b>For sale at:</b>');
            $('#tokenPrice').val(offer.price);
            $('#tokenPrice').prop('readonly', true);
        }
    };
};

//market page
function marketRender(dna, id, gen) {
    var dnaNum = dna.toNumber();
    var idNum = id.toNumber();
    const bearDnaStr = bearDna(dnaNum);
    renderBearWithId(bearDnaStr, idNum);
    
    console.log("marketRender", dnaNum, idNum);

    const bearDiv = `
    <div class="col-lg-4 pointer bearView" id="marketView` + idNum + `">
    <a href="singleBear.html?bearId=` + idNum + `" class="bearLink">
        <div class="featureBox ownersBear" id="ownersBear` + idNum + `">
        `+ bearBody(idNum) + `
        </div>
    </a>
        <div class="dnaDiv bearDna" id="bearDNA` + idNum + `"></div>
        
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>ID: </b>`+ idNum + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN: </b>`+ gen + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA: </b>`+ dnaNum + `</h4></span>
        `+ attributes(idNum) + `
    </div>`;

    const marketView = $('#marketView' + idNum);

    if (!marketView.length) {
        $('#marketView').append(bearDiv)
    };
};

//breeding page
function breedRender(dna, id, gen, gender) {
    const bearDnaStr = bearDna(dna);
    renderBearWithId(bearDnaStr ,id);

    const bearDiv = `
    <div class="col-lg-4 pointer bearView" id="bearView` + idNum + `">
        <div class="featureBox ownersBear" id="ownersBear` + idNum + `">
        `+ bearBody(idNum) + `
        </div>
        <div class="dnaDiv bearDna" id="bearDNA` + idNum + `"></div>
        
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>ID: </b>`+ idNum + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN: </b>`+ gen + `</h4></span>
        <br>
        <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA: </b>`+ dnaNum + `</h4></span>
        `+ attributes(idNum) + `
    </div>`;

    console.log("breedRender", dna, id, gen, gender);

    $('#bearView' + id).attr('onclick', 'breederSelection("' + dna + '","' + id + '","' + gen + '","' + gender + '")');
};
 
function breederSelection(dna, id, gen, gender) {
    const bearDnaStr = bearDna(dna);

    var body = bearBody(gender);
    var attributes = attributes(gender);
    $('#attributes' + gender).html(attributes);
    $('#' + gender).html(body);

    renderBearWithId(bearDnaStr, gender);

    $('#' + gender).addClass('breedSelect');
    $('#' + gender).attr('data-catid', id);
    $('#' + gender).attr('onclick', 'breedKitties("' + gender + '")');
    $('#catDNA' + gender).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4><input class="hidden" id="` + gender + `Id" type="number" value=` + id + `></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>`);
    $('#catSelection').modal('hide');
    removeBreedSelection(id, gender);
    readyForBreeding();
};

//
function readyForBreeding() {
    var mumId = $('#DameId').val();
    var dadId = $('#SireId').val();

    if (!empty(mumId) && !empty(dadId)) {
        $('#breed').css('filter', 'none')
        $('#breed').prop('disabled', false)
        $('#breed').attr('onclick', 'breedBearById("' + dadId + '","' + mumId + '")')
        return true
    };

    $('#breed').prop('disabled', true);
    $('#breed').css('filter', ' grayscale()');
    return false;
};

//Clearing Breeding Window of selected bears
function removeBreedSelection(id, gender) {
    const selectionDiv = `
    <div align="center">
        <div class="egg">
        </div>
            <h4>Select a cat as `+ gender + `</h4>
        </div>
    </div>`;

    if (gender == 'Mother') {
            var catData = $('#Father').attr('data-catid')
        if (catData == id) {
            $('#Father').attr('data-catid', 0)
            $('#Father').attr('onclick', 'chooseParent(this.id)')
            $('#Father').html(selectionDiv)
            $('#Father').removeClass('breedSelect')
            $('#catDNAfather').html('')
        };
    };
    if (gender == 'Father') {
            var catData = $('#Mother').attr('data-catid')
        if (catData == id) {
            $('#Mother').attr('data-catid', 0)
            $('#Mother').attr('onclick', 'chooseParent(this.id)')
            $('#Mother').html(selectionDiv)
            $('#Mother').removeClass('breedSelect')
            $('#catDNAmother').html('')
        };
    };
};