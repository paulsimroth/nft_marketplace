import { ethers } from "ethers";

const contractAddress = "0xC2B8FE1751D83CE98a0c05b51493A3DD92aE060F";
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