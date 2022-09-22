async function connectWallet(){
    if (typeof window.ethereum != "undefined"){
        await ethereum.request({method: "eth_requestAccounts"})
    };
};

const { ethers } = require("ethers");

const contractAddress = "0x992F6484277d50cca90Cc62A20b516AB007Ad26A";

async function prep(){
    await connectWallet();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const instance = new ethers.Contract(contractAddress, abi, signer);
    const accounts = await provider.listAccounts();
    
    const user = accounts[0];
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
}

module.exports = {
    connectWallet,
    prep,
    createBear,
};