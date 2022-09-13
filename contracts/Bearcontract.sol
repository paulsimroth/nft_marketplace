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

    mapping (uint256 => address) public bearIndexToOwner;
    mapping (address => uint256) tokenOwnershipCount;
    mapping (uint256 => address) public bearIndexToApproved;
    mapping (address => mapping (address => bool)) private _operatorApprovals;

    uint256 public gen0Counter;

    //Owner can create gen0 bears
    function createBearGen0(uint256 _genes) public onlyOwner returns(uint256){
        require(gen0Counter <= CREATION_LIMIT_GEN0, "Generation 0 supply already fully minted!");

        gen0Counter++;

        //Gen0 are owned by the contract
        return(_createBear(_genes, 0, 0, 0, address(0)));
    }

    //create Bear
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

    function getBearByOwner(address _owner) external view returns(uint[] memory) {
        uint[] memory result = new uint[](tokenOwnershipCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < bears.length; i++) {
            if (bearIndexToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }

    //returns bear properties
    function getBear(uint256 tokenId) external view returns(
        uint256 genes,
        uint256 birthTime,
        uint256 mumId,
        uint256 dadId,
        uint256 generation
    ){ 
        Bear storage bear = bears[tokenId];

        genes = uint256 (bear.genes);
        birthTime = uint256 (bear.birthTime);
        mumId = uint256 (bear.mumId);
        dadId = uint256 (bear.dadId);
        generation = uint256 (bear.generation);
    }

    function balanceOf(address owner) external view returns (uint256 balance) {
        return tokenOwnershipCount[owner];
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
        return bearIndexToOwner[tokenId];
    }

    function transfer(address to, uint256 tokenId) external {
        require(to != address(0), "Invalid Address; Cannot transfer to Address 0!");
        require(to != address(this), "Invalid Address; Cannot transfer to Contract Address!");
        require(_owns(msg.sender, tokenId), "Invalid Address; Cannot transfer to own Address!");

        _transfer(msg.sender, to, tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        tokenOwnershipCount[_to]++;
        bearIndexToOwner[_tokenId] = _to;
        
        if(_from != address(0)) {
            tokenOwnershipCount[_from]--;
            delete bearIndexToApproved[_tokenId];
        }

        emit Transfer(_from, _to, _tokenId);
    }

    function approve(address _to, uint256 _tokenId) public {
        require(_owns(msg.sender, _tokenId), "msg.sender is not the token owner!");

        _approve(_tokenId, _to);
        emit Approval(msg.sender, _to, _tokenId);
    }

    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
        return bearIndexToOwner[_tokenId] == _claimant;
    }
    
    function _approve(uint256 _tokenId, address _approved) internal {
        bearIndexToApproved[_tokenId] = _approved;
    }

    function setApprovalForAll(address operator, bool approved) public {
        require(operator != msg.sender, "operator must not be msg.sender");

        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function getApproved(uint256 tokenId) public view returns (address) {
        require(tokenId < bears.length, "tokenId does not exist");
        return bearIndexToOwner[tokenId];
    }

    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        return _operatorApprovals[owner][operator];
    }
}