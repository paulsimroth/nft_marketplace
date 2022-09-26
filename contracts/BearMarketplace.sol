// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;
pragma experimental ABIEncoderV2;

import "./Bearcontract.sol";
import "./Ownable.sol";
import "./IBearMarketPlace.sol";

contract BearMarket is Ownable, IBearMarketPlace {

    Bearcontract private _bearcontract;

    struct Offer {
        address payable seller;
        uint256 price;
        uint256 index;
        uint256 tokenId;
        bool active;
    }

    Offer[] offers;

    mapping(uint256 => Offer) tokenIdToOffer;


    //Function and constructor to set the Bearcontract
    function setBearContract(address _bearContractAddress) onlyOwner public {
        _bearcontract = Bearcontract(_bearContractAddress);
    }

    constructor(address _bearContractAddress) public {
        setBearContract(_bearContractAddress);
    }
    
    //Get the details about a offer for tokenId. Throws an error if there is no active offer for tokenId.
    function getOffer(uint256 tokenId) public view returns (address seller, uint256 price, uint256 index, uint256 _tokenId, bool active) {
        Offer storage offer = tokenIdToOffer[tokenId];
        require(offer.active, "no active offer on this tokenId");
        return(
            offer.seller,
            offer.price,
            offer.index,
            offer.tokenId,
            offer.active
        );
    }
    
    //Get all tokenId's that are currently for sale. Returns an empty array if none exist.
    function getAllTokenOnSale() external view  returns(uint256[] memory listOfOffers) {
        uint256 totalOffers = offers.length;

        if (totalOffers == 0) {
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](totalOffers);

            uint256 offerId;

            for (offerId = 0; offerId < totalOffers; offerId++) {
                if(offers[offerId].active == true){
                    result[offerId] = offers[offerId].tokenId;
                }
            }
            return result;
        }
    }
    
    //Creates a new offer for tokenId for the price price.
    function setOffer(uint256 price, uint256 tokenId) public {
        require(_ownsBear(msg.sender, tokenId), "You are not the token owner!");
        require(tokenIdToOffer[tokenId].active == false, "You cannot add a second offer!");
        require(_bearcontract.isApprovedForAll(msg.sender, address(this)), "Contract needs to be approved for all!");

        Offer memory offer = Offer({
            seller: payable (msg.sender),
            price: price,
            active: true,
            tokenId: tokenId,
            index: offers.length
        });

        tokenIdToOffer[tokenId] = offer;
        offers.push(offer);

        emit MarketTransaction("Create Offer", msg.sender, tokenId);
    }
    
    //Removes an existing offer.
    function removeOffer(uint256 tokenId) public {
        Offer memory offer = tokenIdToOffer[tokenId];

        require(offer.seller == msg.sender, "You are not the seller!");

        delete tokenIdToOffer[tokenId];
        offers[tokenIdToOffer[tokenId].index].active = false;

        emit MarketTransaction("Remove Offer", msg.sender, tokenId);
    }
    
    //Executes the purchase of tokenId.
    function buyBear(uint256 tokenId) public payable {
        Offer memory offer = tokenIdToOffer[tokenId];
        require(msg.value == offer.price, "Value does not match price!");
        require(tokenIdToOffer[tokenId].active == true, "No active order!");

        delete tokenIdToOffer[tokenId];
        offers[tokenIdToOffer[tokenId].index].active = false;

        if (offer.price > 0){
            offer.seller.transfer(offer.price);
        }

        _bearcontract.transferFrom(offer.seller, msg.sender, tokenId);

        emit MarketTransaction("Buy Bear", msg.sender, tokenId);
    }

    //Checks if current address is token owner
    function _ownsBear(address _address, uint256 _tokenId) internal view returns (bool) {
        return (_bearcontract.ownerOf(_tokenId) == _address);
    }
}