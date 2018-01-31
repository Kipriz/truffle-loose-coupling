pragma solidity ^0.4.18;

import "./Producer.sol";

contract SettablePlant {

    address producerAddress;

    /* it is possible to restrict who can change the producer */
    function setProducerAddress(address _producerAddress) public {
        producerAddress = _producerAddress;
    }

    function produce() public view returns (uint) {
        Producer producer = Producer(producerAddress);
        return producer.produce();
    }
}
