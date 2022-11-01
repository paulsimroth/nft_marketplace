//Interaction between smart contracts and Frontend
let provider, signer, instance, marketInstance, user, address;
let dnaString = "457896541299";
const bearAddress = "0x2860d6C9F9F3e46635225Dc6626fdc8f9F9F7763";
const marketAddress = "0xFdb4B2eb371389FD8703F9CB6E3b1d8b445a0cD6";

//Initialize on loading
$(document).ready(async function () {
    if (window.ethereum){
 
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        user = provider.getSigner();
        address = await user.getAddress();
        instance = new ethers.Contract(bearAddress, bearAbi, provider);
        marketInstance = new ethers.Contract(marketAddress, marketAbi, provider);
        signer = instance.connect(user);
        marketSigner = marketInstance.connect(user);
        const testCall = await signer.owner();
        console.log('Ethereum Browser: Contract Owner', testCall);
 
    } else {
        console.log('FAILED TO CONNECT WEB3; Install Web3 Provider!');
    }

    //Birth Event
    instance.on("Birth", (owner, bearId, mumId, dadId, genes) => {
    console.log(`birth event: ${owner} | ${bearId} | ${mumId} | ${dadId} | ${genes} `);
    $("#bearCreation").css("display", "block");
    $("#bearCreation").text("owner: " + owner
                            + " | bearId: " + bearId
                            + " | mumId: " + mumId
                            + " | dadId: " + dadId
                            + " | genes: " + genes)
    });

    //MarketTransaction Event
    marketInstance.on("MarketTransaction", (txType, owner, tokenId) => {
        if (txType == "Buy Bear") {
            alert('Succesfull purchase! Now you own this Bear with TokenId: ' + tokenId, 'success');
        };
        if (txType == "Create Offer") {
            alert('Offer set for Kitty id: ' + tokenId, 'success');
            $('#cancelBox').removeClass('hidden');
            $('#cancelBtn').attr('onclick', 'deleteOffer(' + tokenId + ')');
            $('#sellBtn').attr('onclick', '');
            $('#sellBtn').addClass('btn-warning');
            $('#sellBtn').html('<b>For sale at:</b>');
            var price = $('#tokenPrice').val();
            $('#tokenPrice').val(price);
            $('#tokenPrice').prop('readonly', true);
        };
        if (txType == "Remove Offer") {
            alert("Remove Offer for" + tokenId);
            $('#cancelBox').addClass('hidden');
            $('#cancelBtn').attr('onclick', '');       
            $('#tokenPrice').val('');
            $('#tokenPrice').prop('readonly', false);
            $('#sellBtn').removeClass('btn-warning');
            $('#sellBtn').addClass('btn-success');
            $('#sellBtn').html('<b>Sell me</b>');
            $('#sellBtn').attr('onclick', 'sellBear(' + tokenId + ')');
        };
    });
});

/*
*BREEDING FUNCTIONS
*/

//Create Gen 0 Bear
async function createBear(){
    let dnaString = getDna();
        try{
            const tx = await signer.createBearGen0(dnaString);
            const receipt = await tx.wait();
            console.log("Create Bear Gen 0, Receipt:", receipt);
        } catch (error){
            alert("Create Bear Gen 0, ERROR");
            console.log(error);
        }
};

//Choose Bears for breeding
async function chooseParent(gender){
    const arrId = await signer.getBearByOwner(user);
    console.log(arrId);
    for (i = 0; i < arrId.length; i++){
        appendBreeder(arrId[i], gender);
    }
};

async function appendBreeder(id, gender) {
    const bear = await signer.getBear(id);
    breedRender(bear.genes, id, bear.generation, gender); //Adds Bear to breeding page
};

//Breed new gen Bear
async function breedBear(dadId, mumId){
        try{
            const tx = await signer.breed(dadId, mumId);
            const receipt = await tx.wait();
            console.log("Breed new Gen, Receipt:", receipt);
        } catch (error){
            alert("Breed new Gen, ERROR");
            console.log(error);
        }
};

/*
* RENDERING FUNCTIONS TO GET OWN BEARS
*/

//Get Bear of current user
async function getMyBears() {
    try{
    const bearId = await instance.getBearByOwner(address);

    /* console.log("getMyBears", bearId); */

    for (i = 0; i < bearId.length; i++){
        if(bearId[i] != 0){
            appendInventory(bearId[i]);
        }
    }} catch (error){
        alert("GetMyBears, ERROR:", error);
        console.log("getMyBears", error);
    }
};

async function appendInventory(id) {
    const bear = await instance.getBear(id);

    /* console.log("appendInventory",bear.genes, id, bear.generation); */
    
    inventoryRender(bear.genes, id, bear.generation);
};

/*
* MARKET FUNCTIONS
*/

//Initialization of Marketplace
async function initMarket() {
    let isMarketOperator = await instance.isApprovedForAll(user, marketAddress);

    if(isMarketOperator){
        getMarketInventory();
    } else {
        const tx = await instance.setApprovalForAll(marketAddress, true);
        const receipt = await tx.wait();
        console.log("Set Approval for Market, Receipt:", receipt);
        getMarketInventory();
    }
};

//Retrieve all Tokens on Sale in Market
async function getMarketInventory() {
    try{
        const arrId = await await marketInstance.getAllTokenOnSale();
        for (i = 0; i < arrId.length; i++){
            if(arrId[i] != 0){
                appendMarket(arrId[i]);
            }
        }
        console.log("getMarketInventory, Array:", arrId);
    } catch (error){
        alert("getMarketInventory, ERROR");
        console.log("getMarketInventory, ERROR:", error);
    }
};

async function appendMarket(id) {
    const bear = await marketInstance.getBear(id);
    console.log("appendMarket",bear.genes, id, bear.generation); 
    marketRender(bear.genes, id, bear.generation);
};

//check Ownership
async function bearOwnership(id) {
    try{
        const tx = await signer.ownerOf(id);
        const receipt = await tx.wait();
        
        if (receipt.toLowerCase() == user.toLowerCase()) {      
            return true;
        };

        console.log("bearOwnership, Receipt:", receipt); 
    } catch (error){
        alert("bearOwnership, ERROR");
        console.log("bearOwnership, ERROR:", error);
    }
};

//Select Token for Selling
async function sellBear(id) {
    const price = $('#tokenPrice').val();
    const amount = ethers.utils.formatUnits(price, "ether");

    try{
        const tx = await marketSigner.setOffer(amount ,id);
        const receipt = await tx.wait();
        console.log("sellBear, Receipt:", receipt);
    } catch (error){
        alert("sellBear, ERROR");
        console.log("sellBear, ERROR:", error);
    }
};

//Remove Offer from Market
async function removeOffer(id) {
    try{
        const tx = await marketSigner.removeOffer(id);
        const receipt = await tx.wait();
        console.log("removeOffer, Receipt:", receipt);
    } catch (error){
        alert("removeOffer, ERROR");
        console.log("removeOffer, ERROR:", error);
    }
};

//Buy Token
async function buyBear(id) {
    try{
        const tx = await marketSigner.buyBear(id);
        const receipt = await tx.wait();
        console.log("buyToken, Receipt:", receipt);
    } catch (error){
        alert("buyToken, ERROR");
        console.log("buyToken, ERROR:", error);
    }
};

//CheCk Market for Offers
async function getOffers(id) {
    try{
        const tx = await marketSigner.getOffer(amount ,id);
        const receipt = await tx.wait();
        console.log("getOffers, Receipt:", receipt);
        var price = receipt.price;
        var seller = receipt.seller;
        var onSale = false;
        //Bear mus be worth something
        if (price > 0) {
            onSale = true
        };

        //price unit conversion
        price = ethers.utils.formatUnits(price, "ether");
        
        var offers = { seller: seller, price: price, onSale: onSale };
        console.log(offers);
        return offers;
        
    } catch (error){
        alert("getOffers, ERROR");
        console.log("getOffers, ERROR:", error);
    }
};