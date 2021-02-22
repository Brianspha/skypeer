<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      <v-toolbar-title>SkyPeer</v-toolbar-title>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-tabs v-model="active_tab" :color="$store.state.primaryColor" right>
          <v-tab :color="$store.state.primaryColor">Start Call</v-tab>
          <v-tab :color="$store.state.primaryColor">Join Call</v-tab>
          <v-tab :color="$store.state.primaryColor">My Profile</v-tab>

          <v-tab-item>
            <v-container fluid> <StartCall /></v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container fluid> <join-call /></v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container fluid> <profile /></v-container>
          </v-tab-item>
        </v-tabs>
      </v-container>
    </v-main>
    <v-overlay :value="$store.state.isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-snackbar timeout="2000" v-model="$store.state.snackbar" :vertical="true">
      {{ $store.state.snackBarText }}
    </v-snackbar>
  </v-app>
</template>

<script>
import profile from "./views/Profile";
import StartCall from "./views/StartCall.vue";
import EmbarkJS from "../embarkArtifacts/embarkjs";
import detectEthereumProvider from "@metamask/detect-provider";
import bigNumber from "bignumber.js";
import JoinCall from "./views/JoinCall.vue";
import Profile from "./views/Profile.vue";
import swal from "sweetalert2";
export default {
  data() {
    return {
      active_tab: 0,
    };
  },
  components: {
    profile,
    StartCall,
    JoinCall,
    Profile,
  },
  watch: {
    active_tab: async function(val, t) {
      console.log("chnaged_tab: ", val);
      await this.getStreamData();
    },
  },
  beforeMount() {
    const provider = detectEthereumProvider().then((provider) => {
      if (provider) {
        // From now on, this should always be true:
        // provider === window.ethereum
        EmbarkJS.enableEthereum();
        ethereum.request({ method: "eth_requestAccounts" });
        ethereum.on("accountsChanged", (accounts) => {
          this.$store.state.userAddress = accounts[0];
          window.location.reload();
        });
        ethereum.on("chainChanged", (_chainId) => window.location.reload());
        let _this = this;
        _this.$store.state.isLoading = true;
        ethereum.request({ method: "eth_accounts" }).then((accounts) => {
          console.log("accounts: ", accounts);
          _this.$store.state.userAddress = accounts[0];
          _this.$store.state.isLoading = false;
        });
      } else {
        this.$store.dispatch("error", "Metamask is not installed");
      }
    });
  },
  methods: {
    getStreamData: async function() {
      let _this = this;
      this.$store.state.myStreams = [];
      this.$store.state.receivedStreams = [];
      this.$store.state.isLoading = true;
      // var streams = JSON.parse(localStorage.getItem("streams"));
      var streams = await _this.getSkyData();
      console.log(
        "streams: ",
        streams,
        " this.$store.state.userAddress: ",
        this.$store.state.userAddress
      );
      var done = false;
      var count = 0;
      if (streams.data === null) {
        this.$store.state.isLoading = false;
        streams = {
          data: {
            streams: [],
          },
        };
      }
      streams = streams.data.streams;
      streams.map(async (stream) => {
        if (stream.address === this.$store.state.userAddress) {
          _this.$store.state.myStreams = stream.streams;
          stream.streams.map((tempStream) => {
            if (
              tempStream.reciepientAddress.toLowerCase() ===
              _this.$store.state.userAddress.toLowerCase()
            ) {
              _this.$store.state.receivedStreams.push(tempStream);
            }
          });
        } else {
          stream.streams.map((tempStream) => {
            if (
              tempStream.reciepientAddress.toLowerCase() ===
              _this.$store.state.userAddress.toLowerCase()
            ) {
              _this.$store.state.receivedStreams.push(tempStream);
            }
          });
        }
        this.$store.state.streams.push(stream);
        return stream;
      });
      _this.$store.state.receivedStreams = _this.$store.state.receivedStreams.filter(
        (stream, index, self) =>
          index === self.findIndex((t) => t.streamId === stream.streamId)
      );
      for (var i = 0; i < _this.$store.state.myStreams.length; i++) {
        var userStream = _this.$store.state.myStreams[i];
        console.log("userStream: ", userStream);
        var tempBalance = await Promise.resolve(
          _this.getBalance(
            userStream.streamId,
            userStream.sendAddress,
            userStream.decimals
          )
        );
        userStream.balance = tempBalance;
        console.log("senderBalance: ", userStream.balance);
        //userStream = await Promise.resolve(userStream);
        console.log("userStream myStreams: ", userStream);
        _this.$store.state.myStreams[i] = userStream;
      }
      for (i = 0; i < _this.$store.state.receivedStreams.length; i++) {
        userStream = _this.$store.state.receivedStreams[i];
        console.log("userStream: ", userStream);
        var balance = await Promise.resolve(
          _this.getBalance(
            userStream.streamId,
            userStream.reciepientAddress,
            userStream.decimals
          )
        );
        userStream.balance = balance;
        console.log("receivedStreams: ", userStream.balance);
        //userStream = await Promise.resolve(userStream);
        console.log("userStream myStreams: ", userStream);
        _this.$store.state.receivedStreams[i] = userStream;
      }
      _this.$store.state.isLoading = false;
    },
    getSkyData: async function() {
      var test = await this.$store.state.client.db.getJSON(
        this.$store.state.publicKey,
        this.$store.state.appSecret
      );
      return test;
    },
    getBalance: async function(streamId, address, decimals) {
      return new Promise(async (resolve) => {
        this.$store.state.sablier.methods
          .balanceOf(streamId, address)
          .call({ gas: 5000000 })
          .then((balance) => {
            var tempBalance = new bigNumber(balance)
              .dividedBy(new bigNumber(10).pow(decimals * 2))
              .toFixed(0);
            resolve(tempBalance);
            console.log("getBalance: ", tempBalance);
          })
          .catch((error) => {
            console.log("error getting balance: ", error);
            resolve(0);
          });
      });
    },
    saveData(data) {
      this.$store.state.client.db
        .setJSON(
          this.$store.state.privateKey,
          this.$store.state.appSecret,
          data,
          BigInt(this.$store.state.revision)
        )
        .then((results) => {
          console.log("results of saving user data: ", results);
        });
    },
  },
  mounted() {
    swal.fire({
      title: "Compatibility",
      icon: "info",
      html: `To use SkyPeer you will need to ensure that you have setup metamask accordingly as stipulated on the <a href="https://binancex.dev/blog.html?p=making-the-move-from-ethereum-to-bsc">Binance Website</a>
        You will also need some test net eth for the Binance smartchain network is available here <a href="https://testnet.binance.org/faucet-smart">testnet faucet</a> 
      </br><b>Ensure that you select the *Give me BNB option* </b>`,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
    });
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
