let provider, signer, instance, user, address;
let dnaString = "457896541299";
const contractAddress = "0xa542570803fb024b193D59ca9bD46584f8f5576E";

$(document).ready(async function () {
    if (window.ethereum){
 
     provider = new ethers.providers.Web3Provider(window.ethereum);
     await provider.send("eth_requestAccounts", []);
     user = provider.getSigner();
     address = await user.getAddress();
     instance = new ethers.Contract(contractAddress, abi, provider);
     signer = instance.connect(user);
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
                                + "bearId: " + bearId
                                + "mumId: " + mumId
                                + "dadId: " + dadId
                                + "genes: " + genes)
    }).on("error", 
        $("#bearCreation").css("display", "block"),
        $("#bearCreation").css("background-color", "#ff471a"),
        $("#bearCreation").text("ERROR: Birth Event malfunctioned"));
});

async function createBear(){
    let dnaString = getDna();
        try{
            let tx = await signer.createBearGen0(dnaString);
            const receipt = await tx.wait();
            console.log(receipt);
        } catch (error){
            alert("Create Bear, ERROR");
            console.log(error);
        }
};

const dnaArr = []

async function selectParent(parentId){
    dnaArr.push(parentId);
}

async function breedBear(){
    if (dnaArr.length = 2){
        try{
            let tx = await signer.breed(dnaArr[0], dnaArr[1]);
            const receipt = await tx.wait();
            console.log(receipt);
        } catch (error){
            alert("Breed Bear, ERROR");
            console.log(error);
        }

        //Clear dnaArr
        dnaArr.pop();
        dnaArr.pop();
    } else {
        alert("Incorrect number of parents")
    };
};