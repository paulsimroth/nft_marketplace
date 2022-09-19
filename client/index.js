let ethers = require('ethers');

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, abi, provider);

let instance;
let user = await ethereum.request({ method: 'eth_requestAccounts' });;
let contractAddress = "0x53DB98E520DDcDf6A04bF5eC8Ca2FfCa8a579956";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new ethers.Contract(contractAddress, abi, provider);
        contract.attach(address)
        user = accounts[0];

        console.log(instance);

        //Birth Event 
        /*
        contract.filters.Birth().on("data", function (event) {
            console.log(event);
            let owner = event.returnValues.owner;
            let bearId = event.returnValues.bearId;
            let mumId = event.returnValues.mumId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;

            $("#bearCreation").css("display", "block");
            $("#bearCreation").text("owner: " + owner
                                    + "bearId: " + bearId
                                    + "mumId: " + mumId
                                    + "dadId: " + dadId
                                    + "genes: " + genes)
        })
        .on("error", 
            $("#bearCreation").css("display", "block"),
            $("#bearCreation").css("background-color", "#ff471a"),
            $("#bearCreation").text("ERROR: Birth Event malfunctioned"));
*/
        //test for ethers
        contract.on("Birth", (owner, bearId, mumId, dadId, genes) => {
            console.log(`birth event ${owner} | ${bearId} | ${mumId} | ${dadId} | ${genes} `);

            $("#bearCreation").css("display", "block");
            $("#bearCreation").text("owner: " + owner
                                    + "bearId: " + bearId
                                    + "mumId: " + mumId
                                    + "dadId: " + dadId
                                    + "genes: " + genes)
        });
    });
})

function createBear(){
    let dnaString = getDna();
    contract.methods.createBearGen0(dnaString).send({}, function(error, txHash){
        if(error){
            alert("Create Bear, ERROR");
            console.log(error);
        } else {
            console.log(txHash);
        }
    })
}