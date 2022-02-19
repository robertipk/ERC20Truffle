const MyToken = artifacts.require("Bob");

module.exports = function (deployer) {
  deployer.deploy(MyToken, 1000000000);
};
