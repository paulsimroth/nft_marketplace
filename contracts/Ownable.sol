// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

abstract contract Ownable {

    address private _owner = msg.sender;

    // Returns the address of the owner.
    function owner() public view returns (address) {
        return _owner;
    }

    //onlyOwner modifier
    modifier onlyOwner() {
        require(owner() == msg.sender, "Caller is not the owner");
        _;
    }
}