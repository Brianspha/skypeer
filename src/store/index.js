import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import swal from "sweetalert2";
import { SkynetClient, genKeyPairFromSeed } from "skynet-js";

Vue.use(Vuex);
const Web3EthContract = require("web3-eth-contract");
Web3EthContract.setProvider("http://localhost:8546");
var loading = true;

var userAddress = "";
var appSecret =
  "askdjlaksdj klajaAAAAaaaasd111a11sddasdasdk12312d111asdasdad1212ads la sjdl111kasj1dk11lasdjda1ja   asdh1012293 jkasldkja oduaj idjaslkdja lskdjlak sdj";

const { publicKey, privateKey } = genKeyPairFromSeed(appSecret);
const client = new SkynetClient("https://siasky.net/");
//localStorage.clear()
localStorage.setItem("streams", JSON.stringify({ streams: [] }));
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    privateKey: privateKey,
    streams: [],
    snackbarText: "",
    snackbar: false,
    changedTab: false,
    publicKey: publicKey,
    appSecret: appSecret,
    revision: 1,
    client: client,
    currentSessionStream: {},
    myStreams: [],
    receivedStreams: [],
    receivedStreamsFromOthers:[],
    userAddress: userAddress,
    iERC20: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x06fdde03",
      },
      {
        constant: false,
        inputs: [
          { name: "spender", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x095ea7b3",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x18160ddd",
      },
      {
        constant: false,
        inputs: [
          { name: "sender", type: "address" },
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x23b872dd",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x313ce567",
      },
      {
        constant: false,
        inputs: [
          { name: "spender", type: "address" },
          { name: "addedValue", type: "uint256" },
        ],
        name: "increaseAllowance",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x39509351",
      },
      {
        constant: true,
        inputs: [{ name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x70a08231",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x95d89b41",
      },
      {
        constant: false,
        inputs: [
          { name: "spender", type: "address" },
          { name: "subtractedValue", type: "uint256" },
        ],
        name: "decreaseAllowance",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa457c2d7",
      },
      {
        constant: false,
        inputs: [
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa9059cbb",
      },
      {
        constant: true,
        inputs: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xdd62ed3e",
      },
      {
        inputs: [
          { name: "name", type: "string" },
          { name: "symbol", type: "string" },
          { name: "decimals", type: "uint8" },
          { name: "initialsupply", type: "uint256" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
        name: "constructor",
        signature: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "from", type: "address" },
          { indexed: true, name: "to", type: "address" },
          { indexed: false, name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
        signature:
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "owner", type: "address" },
          { indexed: true, name: "spender", type: "address" },
          { indexed: false, name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
        signature:
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      },
    ],
    binanceContract: Web3EthContract,
    primaryColor: "deep-purple accent-4",
    isLoading: false,
    blackText: "black",
    helpDialog: false,
    selectedHelp: {},
    sablier: require("../../embarkArtifacts/contracts/Sablier").default,
    xDAI: require("../../embarkArtifacts/contracts/ERC20xDAI").default,
    bnb: require("../../embarkArtifacts/contracts/ERC20BNB").default,
  },
  plugins: [createPersistedState()],
  modules: {},
  actions: {
    success(context, message) {
      console.log("shwoing success message: ", message);
      swal.fire("Success", message, "success");
    },
    error(context, message) {
      console.log("shwoing error message: ", message);
      swal.fire("Error!", message, "error");
    },
    successWithFooter(context, message) {
      console.log("shwoing error message: ", message);
      swal.fire("Error!", message, "error");
    },
  },
});

export default store;
