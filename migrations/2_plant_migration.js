var Plant = artifacts.require("./Plant.sol");
var SettablePlant = artifacts.require("./SettablePlant.sol");
var Producer = artifacts.require("./Producer.sol");
var AirplaneProducer = artifacts.require("./AirplaneProducer");
var TankProducer = artifacts.require("./TankProducer");
var SpaceshipProducer = artifacts.require("./SpaceshipProducer.sol");

module.exports = function (deployer) {
    deployer.deploy(Plant);
    deployer.deploy(SettablePlant);
    deployer.deploy(Producer);
    deployer.deploy(AirplaneProducer);
    deployer.deploy(TankProducer);
    deployer.deploy(SpaceshipProducer);
};
