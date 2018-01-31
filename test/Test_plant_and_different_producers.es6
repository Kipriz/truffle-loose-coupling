"use strict";

/* Run this test in `truffle develop`
*  > truffle develop
*  truffle(develop)> test test/Test_01_buy_5_tickets.es6
* */

const chai = require('chai');

const expect = chai.expect;
const assert = chai.assert;
chai.should();
const BigNumber = require('bignumber.js');
const utils = require("./utils/utils.es6");

//use default BigNumber
chai.use(require('chai-bignumber')(BigNumber));

let Plant = artifacts.require("./Plant.sol");
let Producer = artifacts.require("./Producer.sol");
let AirplaneProducer = artifacts.require("./AirplaneProducer");
let TankProducer = artifacts.require("./TankProducer");
let SpaceshipProducer = artifacts.require("./SpaceshipProducer.sol");

contract("Test Pland with different producers", accounts => {

    it("check existance", async () => {
        expect(await Plant.deployed()).to.not.be.undefined;
        expect(await Producer.deployed()).to.not.be.undefined;
        expect(await AirplaneProducer.deployed()).to.not.be.undefined;
        expect(await TankProducer.deployed()).to.not.be.undefined;
        expect(await SpaceshipProducer.deployed()).to.not.be.undefined;
    });

    it("use abstract producer", async () => {
        const plant = await Plant.deployed();
        const producer = await Producer.deployed();

        const result = await plant.produce(producer.address);
        console.log(result);

        expect(result).to.be.bignumber.equal(777);
    });

    it("use tank producer", async () => {
        const plant = await Plant.deployed();
        const producer = await TankProducer.deployed();

        const result = await plant.produce(producer.address);
        console.log(result);

        expect(result).to.be.bignumber.equal(33);
    });

    it("use airplane producer", async () => {
        const plant = await Plant.deployed();
        const producer = await AirplaneProducer.deployed();

        const result = await plant.produce(producer.address);
        console.log(result);

        expect(result).to.be.bignumber.equal(55);
    });

    it("use spaceship producer", async() => {
        const plant = await Plant.deployed();
        const producer = await SpaceshipProducer.deployed();

        const result = await plant.produce(producer.address);
        console.log(result);

        expect(result).to.be.bignumber.equal(1000);
    })
});