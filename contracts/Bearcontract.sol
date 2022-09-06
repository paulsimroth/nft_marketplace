// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "./IERC721.sol";

contract Bearcontract is IERC721 {

    string public bearTicker = "AcademyBear";
    string public bearSymbol = "ABT";

    struct Bear {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Bear[] bears;

    mapping(address => uint256) ownershipTokenCount;
    mapping(uint256 => address) tokenOwner;

    function balanceOf(address owner) external view returns (uint256 balance) {
        return ownershipTokenCount[owner];
    }

    function totalSupply() external view returns (uint256) {
        return bears.length;
    }

    function name() external view returns (string memory tokenName) {
        tokenName = bearTicker;
    }

    function symbol() external view returns (string memory tokenSymbol) {
        tokenSymbol = bearSymbol;
    }

    function ownerOf(uint256 tokenId) external view returns (address) {
        require(tokenOwner[tokenId] != address(0), "Invalid token ID");
        return tokenOwner[tokenId];
    }

    function transfer(address to, uint256 tokenId) external {
        require(to != address(0), "Invalid Address; Cannot transfer to Address 0!");
        require(to != address(this), "Invalid Address; Cannot transfer to Contract Address!");
        require(tokenOwner[tokenId] == address(msg.sender), "Invalid Address; Cannot transfer to own Address!");

        _transfer(msg.sender, to, tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        ownershipTokenCount[_to]++;
        
        if(_from != address(0)) {
            ownershipTokenCount[_from]--;
        }

        tokenOwner[_tokenId] = _to;

        emit Transfer(_from, _to, _tokenId);
    }
}