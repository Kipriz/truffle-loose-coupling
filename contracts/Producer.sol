pragma solidity ^0.4.18;

contract Producer {
    function produce() public pure returns (uint) {
        return 777;
    }
}

contract AirplaneProducer is Producer {
    function produce() public pure returns (uint) {
        return 55;
    }
}

contract TankProducer /* do not extend Producer, it is not necessary */ {
    function produce() public pure returns (uint) {
        return 33;
    }
}
