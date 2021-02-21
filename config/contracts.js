const bigNumber = require("bignumber.js");
const intialAmount = new bigNumber(9900000000000000000000 * 10 ** 18).toFixed();
console.log("initialAmount: ", intialAmount);
require("dotenv").config();
console.log("process.env: ", process.env.GAME_KEY);
const utils = require("web3-utils");
module.exports = {
  // default applies to all environments
  default: {
    library: "embarkjs", // can also be 'web3'

    // order of connections the dapp should connect to
    dappConnection: ["$WEB3"],

    // Automatically call `ethereum.enable` if true.
    // If false, the following code must run before sending any transaction: `await EmbarkJS.enableEthereum();`
    // Default value is true.
    // dappAutoEnable: true,

    gas: "auto",

    // Strategy for the deployment of the contracts:
    // - implicit will try to deploy all the contracts located inside the contracts directory
    //            or the directory configured for the location of the contracts. This is default one
    //            when not specified
    // - explicit will only attempt to deploy the contracts that are explicitly specified inside the
    //            contracts section.
    // strategy: 'implicit',

    // minimalContractSize, when set to true, tells Embark to generate contract files without the heavy bytecodes
    // Using filteredFields lets you customize which field you want to filter out of the contract file (requires minimalContractSize: true)
    // minimalContractSize: false,
    // filteredFields: [],
    strategy: "explicit",
    deploy: {
      ERC20: {
        args: ["DAI", "DAI", 18, intialAmount],
      },
      ERC20xDAI: {
        args: ["xDAI", "xDAI", 18, intialAmount],
      },
      ERC20BNB: {
        args: ["BNB", "BNB", 18, intialAmount],
      },
      CTokenManager: {
        args: [],
      },
      Sablier: {
        deps: ["ERC20"],
        args: ["$CTokenManager"],
      },
    },
  },
  binance: {
    gas: "6000000",
    strategy: "explicit",
    deploy: {
      Amazeng: {
        deps: ["ERC20", "Sablier"],
        onDeploy: async ({ contracts, web3, logger }) => {
          console.log("contracts: ", web3.eth.defaultAccount);
          await contracts.Amazeng.methods
            .init(
              contracts.ERC20.options.address,
              contracts.Sablier.options.address
            )
            .send({
              gas: 800000,
            });
          await contracts.ERC20.methods
            .approve(contracts.Amazeng.options.address, intialAmount)
            .send({
              gas: 800000,
            });
          await contracts.ERC20.methods
            .transfer(contracts.Amazeng.options.address, intialAmount)
            .send({
              gas: 800000,
            });

          console.log("approved Amazeng contract...");
        },
      },
      ERC20: {
        args: ["AmazengToken", "AT", 18, intialAmount],
      },
      CTokenManager: {
        args: [],
      },
      Sablier: {
        deps: ["ERC20"],
        args: ["$CTokenManager"],
      },
    },
  },
  // default environment, merges with the settings in default
  // assumed to be the intended environment by `embark run`

  // you can name an environment with specific settings and then specify with
  // "embark run custom_name" or "embark blockchain custom_name"
  // custom_name: {}
};
