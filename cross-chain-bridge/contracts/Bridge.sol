// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./BridgeToken.sol";

contract Bridge {
    address public admin;
    BridgeToken public token;

    event Locked(address indexed user, uint256 amount, string targetChain, address targetAddress);
    event Released(address indexed user, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin");
        _;
    }

    constructor(address tokenAddress) {
        admin = msg.sender;
        token = BridgeToken(tokenAddress);
    }

    function lock(uint256 amount, string memory targetChain, address targetAddress) external {
        token.transferFrom(msg.sender, address(this), amount);
        emit Locked(msg.sender, amount, targetChain, targetAddress);
    }

    function release(address to, uint256 amount) external onlyAdmin {
        token.transfer(to, amount);
        emit Released(to, amount);
    }
}
