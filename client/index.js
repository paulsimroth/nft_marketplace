import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();

const address = "dai.tokens.ethers.eth";
const contract = new ethers.Contract(address, abi, provider);

let instance;
let user;
let contractAddress = "0x00c3fb12F09a1f00bbbAf512DDad3F3c612F565C";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new ethers.Contract(contractAddress, abi, provider);
        user = accounts[0];

        console.log(instance);

        //Birth Event
        contract.Birth().on("data", function (event) {
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
    });
})

function createBear(){
    let dnaString = getDna();
    contract.createBearGen0(dnaString).send({}, function(error, txHash){
        if(error){
            alert("Create Bear, ERROR");
            console.log(error);
        } else {
            console.log(txHash);
        }
    })
}