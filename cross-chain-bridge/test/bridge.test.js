const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Cross-Chain Bridge Mockup", function () {
    let token, bridge;
    let owner, user;

    beforeEach(async () => {
        [owner, user] = await ethers.getSigners();

        const BridgeToken = await ethers.getContractFactory("BridgeToken");
        token = await BridgeToken.deploy("MockToken", "MKT", owner.address);
        await token.deployed();

        const Bridge = await ethers.getContractFactory("Bridge");
        bridge = await Bridge.deploy(token.address);
        await bridge.deployed();

        // Mint tokens to user and approve bridge
        await token.mint(user.address, ethers.utils.parseEther("1000"));
        await token.connect(user).approve(bridge.address, ethers.utils.parseEther("1000"));
    });

    it("should lock tokens and emit event", async () => {
        const amount = ethers.utils.parseEther("100");
        const targetChain = "ChainB";
        const targetAddress = user.address;

        await expect(bridge.connect(user).lock(amount, targetChain, targetAddress))
            .to.emit(bridge, "Locked")
            .withArgs(user.address, amount, targetChain, targetAddress);

        const bridgeBalance = await token.balanceOf(bridge.address);
        expect(bridgeBalance).to.equal(amount);
    });

    it("should release tokens to user by admin", async () => {
        const amount = ethers.utils.parseEther("50");

        await token.transfer(bridge.address, amount);

        await expect(bridge.connect(owner).release(user.address, amount))
            .to.emit(bridge, "Released")
            .withArgs(user.address, amount);

        const userBalance = await token.balanceOf(user.address);
        expect(userBalance).to.equal(amount);
    });

    it("should fail release if not admin", async () => {
        const amount = ethers.utils.parseEther("50");

        await expect(
            bridge.connect(user).release(user.address, amount)
        ).to.be.revertedWith("Only admin");
    });
});
