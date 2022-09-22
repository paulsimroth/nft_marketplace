/*
import { ethers } from "ethers";

const contractAddress = "0x24B33Fc05F3386d6aCa51a10526480ceb86de5e9";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

$(document).ready(function(){
    window.ethereum.enable().then(function (accounts){  

        
        provider.send("eth_requestAccounts", []);
        const instance = new ethers.Contract(contractAddress, abi, provider);
        let user = accounts[0];

        console.log(instance);
        
        //Birth Event
        instance.on("Birth", (owner, bearId, mumId, dadId, genes) => {
            console.log(`birth event: ${owner} | ${bearId} | ${mumId} | ${dadId} | ${genes} `);

            $("#bearCreation").css("display", "block");
            $("#bearCreation").text("owner: " + owner
                                    + "bearId: " + bearId
                                    + "mumId: " + mumId
                                    + "dadId: " + dadId
                                    + "genes: " + genes)
        }).on("error", 
            $("#bearCreation").css("display", "block"),
            $("#bearCreation").css("background-color", "#ff471a"),
            $("#bearCreation").text("ERROR: Birth Event malfunctioned"));
    });

});

async function createBear() {
    let dnaString = getDna();

    try {
        await instance.connect(signer).createBearGen0(dnaString).send();
      } catch (err) {
        console.log(err);
        alert("Create Bear, ERROR");
      };
};
*/

//Web3js Version for transitioning

async function connectWallet(){
    if (typeof window.ethereum != "undefined"){
        await ethereum.request({method: "eth_requestAccounts"})
    };
};

const { ethers } = require("ethers");

const contractAddress = "0x992F6484277d50cca90Cc62A20b516AB007Ad26A";

async function prep(){
    await connectWallet();

    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const instance = new ethers.Contract(contractAddress, abi, signer);
    const accounts = await provider.listAccounts();
    
    const user = accounts[0];
    
    console.log(instance);

    //Birth Event
    instance.on("Birth", (owner, bearId, mumId, dadId, genes) => {
        console.log(`birth event: ${owner} | ${bearId} | ${mumId} | ${dadId} | ${genes} `);

        $("#bearCreation").css("display", "block");
        $("#bearCreation").text("owner: " + owner
                                + "bearId: " + bearId
                                + "mumId: " + mumId
                                + "dadId: " + dadId
                                + "genes: " + genes)
    }).on("error", 
        $("#bearCreation").css("display", "block"),
        $("#bearCreation").css("background-color", "#ff471a"),
        $("#bearCreation").text("ERROR: Birth Event malfunctioned"));

};

$(document).ready(
    prep()
);

async function createBear(){
    let dnaString = getDna();
    let tx = await instance.createBearGen0(dnaString);
    async function receipt(error, tx){
        try{
            await tx.wait();
            console.log(tx);
        } catch {
            alert("Create Bear, ERROR");
            console.log(error);
        }
    }
    receipt();
}

module.exports = {
    connectWallet,
    prep,
    createBear,
};