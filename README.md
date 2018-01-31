Demo project to prove Solidity duck typing and loose coupling.

It is possible split logic to a few contracts. 
The main contract may accept only address, then it initiates contract and due to duck type (a kind of) it can call different sub-contract implementation.

Plant contract can produce whatever Producers can. Moreoever, Producers may not extend `Producer` contract,
but just be compatible with necessary methods (e.g. `produce()`).

Run test in using `truffle develop`;