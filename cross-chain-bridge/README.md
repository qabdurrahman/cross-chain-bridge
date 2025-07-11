# Cross-Chain Bridge (Mockup)

A self-learning Solidity project simulating a basic cross-chain bridge architecture between two EVM-compatible blockchains. The project demonstrates locking, event emission, relayer-based validation, and token minting to simulate cross-chain ERC-20 transfers.

## 🔗 Overview

This mock bridge replicates the core logic behind real-world bridges like Polygon PoS or Multichain. Tokens are locked on the source chain, and transfer events are emitted for off-chain relayers. The relayer (simulated) triggers a mint on the destination chain, achieving a trust-minimized asset transfer.

---

## ⚙️ Features

- 🔒 **Lock & Emit**: Users lock ERC-20 tokens in the bridge contract which emits a `Locked` event.
- 🧾 **Simulated Relayer**: Admin (bridge owner) reads the event off-chain and triggers minting on the destination.
- 🔁 **Mint & Burn**: Mock token can be minted or burned with admin control to simulate bridging.
- ✅ **Access Control**: Only admin can call `release`, ensuring trusted validation.

---

## 🧪 Testing

The project is fully tested using Hardhat:

```bash
npx hardhat test
