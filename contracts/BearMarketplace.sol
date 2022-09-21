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

    /**
    * Set the current BearContract address and initialize the instance of Kittycontract.
    * Requirement: Only the contract owner can call.
     */
    function setBearContract(address _bearContractAddress) onlyOwner public {

    }

    /**
    * Get the details about a offer for _tokenId. Throws an error if there is no active offer for _tokenId.
     */
    function getOffer(uint256 _tokenId) external view returns ( address seller, uint256 price, uint256 index, uint256 tokenId, bool active) {
        require(active, "no active offer on this tokeId");
    }

    /**
    * Get all tokenId's that are currently for sale. Returns an empty array if none exist.
     */
    function getAllTokenOnSale() external view  returns(uint256[] memory listOfOffers) {

    }

    /**
    * Creates a new offer for _tokenId for the price _price.
    * Emits the MarketTransaction event with txType "Create offer"
    * Requirement: Only the owner of _tokenId can create an offer.
    * Requirement: There can only be one active offer for a token at a time.
    * Requirement: Marketplace contract (this) needs to be an approved operator when the offer is created.
     */
    function setOffer(uint256 price, uint256 tokenId) public {
        emit MarketTransaction("Create Offer", msg.sender, tokenId);
    }

    /**
    * Removes an existing offer.
    * Emits the MarketTransaction event with txType "Remove offer"
    * Requirement: Only the seller of _tokenId can remove an offer.
     */
    function removeOffer(uint256 _tokenId) external {

    }

    /**
    * Executes the purchase of _tokenId.
    * Sends the funds to the seller and transfers the token using transferFrom in Kittycontract.
    * Emits the MarketTransaction event with txType "Buy".
    * Requirement: The msg.value needs to equal the price of _tokenId
    * Requirement: There must be an active offer for _tokenId
     */
    function buyBear(uint256 _tokenId) external payable {

    }
}