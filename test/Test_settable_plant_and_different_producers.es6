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

let SettablePlant = artifacts.require("./SettablePlant.sol");
let Producer = artifacts.require("./Producer.sol");
let AirplaneProducer = artifacts.require("./AirplaneProducer");
let TankProducer = artifacts.require("./TankProducer");
let SpaceshipProducer = artifacts.require("./SpaceshipProducer.sol");

contract("Test Pland with different producers", accounts => {

    it("check existance", async () => {
        expect(await SettablePlant.deployed()).to.not.be.undefined;
        expect(await Producer.deployed()).to.not.be.undefined;
        expect(await AirplaneProducer.deployed()).to.not.be.undefined;
        expect(await TankProducer.deployed()).to.not.be.undefined;
        expect(await SpaceshipProducer.deployed()).to.not.be.undefined;
    });

    it("use different producers for a single plant", async () => {
        const plant = await SettablePlant.deployed();
        const producer = await Producer.deployed();
        const tankProducer = await TankProducer.deployed();
        const airplaneProducer = await AirplaneProducer.deployed();
        const spaceshipProducer = await SpaceshipProducer.deployed();

        await plant.setProducerAddress(producer.address);

        expect(await plant.produce()).to.be.bignumber.equal(777);
        expect(await plant.produce()).to.be.bignumber.equal(777);

        await plant.setProducerAddress(tankProducer.address);

        expect(await plant.produce()).to.be.bignumber.equal(33);
        expect(await plant.produce()).to.be.bignumber.equal(33);

        await plant.setProducerAddress(airplaneProducer.address);

        expect(await plant.produce()).to.be.bignumber.equal(55);
        expect(await plant.produce()).to.be.bignumber.equal(55);

        await plant.setProducerAddress(spaceshipProducer.address);

        expect(await plant.produce()).to.be.bignumber.equal(1000);
        expect(await plant.produce()).to.be.bignumber.equal(1000);

        await plant.setProducerAddress(producer.address); //back to simple producer

        expect(await plant.produce()).to.be.bignumber.equal(777);
        expect(await plant.produce()).to.be.bignumber.equal(777);

    });
});