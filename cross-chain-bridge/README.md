# Cross-Chain Bridge Mockup

A self-initiated project that explores cross-chain token transfers using a simulated ERC-20 bridging protocol. The project mimics fundamental behaviors of token bridges like mint/burn mechanics, lock/unlock flows, and event-driven syncing between mock EVM-compatible chains.

## 🚀 Features

- **Bridge Contracts**: Lock and unlock ERC-20 tokens on the source chain
- **Event Emission**: Emit transfer events for relayer-based tracking
- **Mint-Burn Flow**: Mint tokens on the destination chain upon validation
- **Access Control**: Only authorized relayers can mint or unlock
- **Event Simulation**: Parse logs and simulate end-to-end bridge transfers

## 🔧 Tech Stack

- **Solidity** for smart contracts
- **Hardhat** for local development and testing
- **Ethers.js** for off-chain interaction and log parsing

## 🧪 How to Run Locally

```bash
git clone git@github.com:qabdurrahman/cross-chain-bridge.git
cd cross-chain-bridge
npm install
npx hardhat compile
npx hardhat test
