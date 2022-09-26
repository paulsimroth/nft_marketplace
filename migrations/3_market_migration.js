const Token = artifacts.require("Bearcontract");
const Market = artifacts.require("BearMarket");

module.exports = function (deployer) {
  deployer.deploy(Market, Token.address);
};
