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

const { ethers, providers, signer } = require("ethers");

const contractAddress = "0x24B33Fc05F3386d6aCa51a10526480ceb86de5e9";

async function prep(){
    await window.ethereum.enable();
    const provider = await new providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    const signer = provider.getSigner();
    const user = accounts[0];
    const instance = new ethers.Contract(contractAddress, abi, signer);
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
    
    const signature = await signer.signMessage("Sign in to create Bears");
    let dnaString = getDna();
    let tx = await instance.connect(signer).createBearGen0(dnaString);
    async function receipt(error, signature){
        try{
            await tx.wait();
            console.log(signature);
            console.log(tx);
        } catch {
            alert("Create Bear, ERROR");
            console.log(error);
        }
    }
    receipt();
}