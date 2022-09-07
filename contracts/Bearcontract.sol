// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;
pragma experimental ABIEncoderV2;

import "./IERC721.sol";
import "./Ownable.sol";

contract Bearcontract is IERC721, Ownable {

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    string public constant bearTicker = "AcademyBear";
    string public constant bearSymbol = "ABT";

    event Birth(
        address owner, 
        uint256 bearId, 
        uint256 mumId, 
        uint256 dadId, 
        uint256 genes
    );

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

    uint256 public gen0Counter;

    function createBearGen0(uint256 _genes) public onlyOwner returns(uint256){
        require(gen0Counter < CREATION_LIMIT_GEN0, "Generation 0 supply already fully minted!");

        gen0Counter++;

        //Gen0 are owned by the contract
        return(_createBear(_genes, 0, 0, 0, address(0)));
    }

    function _createBear( 
        uint256 _genes,
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        address _owner
    ) private returns (uint256) {
        Bear memory _bear = Bear({
            genes: _genes,
            birthTime: uint64(block.timestamp),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });

        bears.push(_bear);

        uint256 newBearId = bears.length - 1;

        emit Birth(_owner, newBearId, _mumId, _dadId, _genes);

        _transfer(address(0), _owner, newBearId);

        return newBearId;
    }

    function getBear() public {

    }

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