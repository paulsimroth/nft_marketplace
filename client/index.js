//Interaction between smart contracts and Frontend
let provider, signer, instance, marketInstance, user, address;
let dnaString = "457896541299";
const bearAddress = "0xa542570803fb024b193D59ca9bD46584f8f5576E";
const marketAddress = "0x44899c20a67dc7d33643e0045dE47d2b2943C84F";

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
});

//Initialization of Marketplace
async function initMarket() {
    let isMarketOperator = await instance.isApprovedForAll(user, marketAddress);

    if(isMarketOperator){
        getInventory();
    } else {
        const tx = await instance.setApprovalForAll(marketAddress, true);
        const receipt = await tx.wait();
        console.log("Set Approval for Market, Receipt:", receipt);
        getInventory();
    }
}

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
async function chooseParents(gender){
    let arrId = await instance.getBearByOwner();
    console.log(arrId);
    for (i = 0; i < arrId.length; i++){
        appendBreeder(arrId[i], gender);
    }
};

async function appendBreeder(id, gender) {
    let bear = await instance.getBear(id);
    breedRender(bear[0], id, bear['generation'], gender); //Adds Bear to breeding page
};

//Breed new gen Bear
async function breedBear(){
    let dadId = PLACEHOLDER;
    let mumId = PLACEHOLDER;
        try{
            const tx = await signer.breed(dadId, mumId);
            const receipt = await tx.wait();
            console.log("Create Bear, Receipt:", receipt);
        } catch (error){
            alert("Create Bear, ERROR");
            console.log(error);
        }
};

//Retrieve all Tokens on Sale in Market
async function getInventory() {
    let arrId = await marketInstance.getAllTokenOnSale();
    console.log(arrId);
    for (i = 0; i < arrId.length; i++){
        if(arrId[i] != 0){
            appendInventory(arrId[i]);
        }
    }
}

//Get Bear of current user
async function getMyBears() {
    try{
    const bearId = await signer.getBearByOwner(address);
    console.log("getMyBears", bearId);
    for (i = 0; i < bearId.length; i++){
        if(bearId[i] != 0){
            appendInventory(bearId[i]);
        }
    }} catch (error){
        alert("GetMyBears, ERROR");
        console.log("getMyBears", error);
    }
};

async function appendInventory(id) {
    let bear = await instance.getBear(id);
    console.log("appendInventory", bear);
    inventoryRender(bear.genes, id, bear.generation);
};

//Get Owner by Id

//Select Token for Selling

//Buy Token