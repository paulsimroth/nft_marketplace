let web3 = new Web3(Web3.givenProvider);

let instance;
let user;
let contractAddress = "0xbdbcB1004103d9Cc1F7A9E96D17D23f8d0003aEf";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        user = accounts[0];

        console.log(instance);

        //Birth Event
        instance.events.Birth().on("data", function (event) {
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
            $("#bearCreation").text("ERROR: Birth Event malfunctioned"));
    });
})

function createBear(){
    let dnaString = getDna();
    instance.methods.createBearGen0(dnaString).send({}, function(error, txHash){
        if(error){
            alert("Create Bear, ERROR");
            console.log(error);
        } else {
            console.log(txHash);
        }
    })
}