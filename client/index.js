let web3 = new Web3(Web3.givenProvider);

let instance;
let user;
let contractAddress = "0x383079758930eD5d2CC66061d74d17a30F61610B";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        user = accounts[0];

        console.log(instance);


        //Example for function implementation
        instance.methods.createBearGen0(dna).send({}, function(error, txHash){
            if(error){
                console.log(error)
            }
            else{
                console.log(txHash)
            }
        });
    });

})