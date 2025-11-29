# Cross-Chain Bridge (Mockup)

⚠️ **Note:**  
All project files and Solidity contracts are inside the **`/cross-chain-bridge`** directory.

This repository contains my self-built cross-chain bridge prototype created as a learning project to understand secure asset transfers across EVM chains.

---

## 🚀 Project Overview — Cross-Chain Bridge Mockup | Self Learning Project (July ’25)

Explored cross-chain token transfers and event-driven architecture using **Solidity**, **Foundry**, and **Ethers.js**.

### 🔧 Key Features
- **Bridge contracts** to lock ERC-20 tokens and emit transfer events for relayer-based syncing & validation  
- **Simulated mint-burn bridging** between mock EVM chains  
- **Event logs + parsing** for off-chain trigger systems (relayers/oracles)  
- **Access-controlled execution** for secure release/mint on destination chain  
- **End-to-end flow verification**:
  - Lock → Emit → Relay → Mint  
  - Balance checks  
  - Proof-of-state validation  
  - Cross-chain state consistency

---

## 📁 Folder Structure
