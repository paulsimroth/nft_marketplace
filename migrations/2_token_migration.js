const Token = artifacts.require("Bearcontract");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
