require("dotenv").config();
// This file contains only the basic configuration you need to run Embark's node
// For additional configurations, see: https://framework.embarklabs.io/docs/blockchain_configuration.html
module.exports = {
  default: {
    warnIfMetamask: true,

    enabled: true,
    client: "geth", // Can be geth or parity (default:geth)
  },

  development: {
    clientConfig: {
      miningMode: "auto", // Mode in which the node mines. Options: dev, auto, always, off
    },
  },
  // default applies to all environments
  binance: {
    rpcHost: "https://data-seed-prebsc-1-s1.binance.org",
    rpcPort: "8545",
    endpoint: process.env.BINANCE_PROVIDER_URL,
    accounts: [
      {
        privateKey: process.env.P_KEY,
      },
    ],
  },
  // you can name an environment with specific settings and then specify with
  // "embark run custom_name" or "embark blockchain custom_name"
  //custom_name: {
  //}
};
