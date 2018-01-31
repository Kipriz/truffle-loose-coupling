pragma solidity ^0.4.18;

import "./Producer.sol";

contract Plant {
    
    function produce(address producerAddress) public view returns (uint) {
        Producer producer = Producer(producerAddress);
        return producer.produce();
    }
}
