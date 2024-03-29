import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenv } from "dotenv"
dotenv();

const PRIVATE_KEY1 = process.env.PRIVATE_KEY1 || "";
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2 || "";
const PRIVATE_KEY3 = process.env.PRIVATE_KEY3 || "";
const PRIVATE_KEY4 = process.env.PRIVATE_KEY4 || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1,
      forking: {
        url: "https://ethereum.publicnode.com",
        enabled: true
      },
      accounts: [
        { balance: "100000000000000000000", privateKey: PRIVATE_KEY1 },
        { balance: "100000000000000000000", privateKey: PRIVATE_KEY2 },
        { balance: "100000000000000000000", privateKey: PRIVATE_KEY3 },
        { balance: "100000000000000000000", privateKey: PRIVATE_KEY4 },
      ]
    }
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};

export default config;
