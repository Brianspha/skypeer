<template>
  <v-container fluid>
    <v-toolbar :color="$store.state.primaryColor"
      ><v-toolbar-title color="white">Join Call</v-toolbar-title></v-toolbar
    >
    <v-container fluid>
      <v-row>
        <v-col><video width="800" ref="myVideo" id="myVideo"></video></v-col>
        <v-col>
          <v-card>
            Session ID
            <v-card-text>{{ myPeerId }}</v-card-text>
            Amount of {{ symbol }} Streamed
            <v-card-text>{{ joinReciepientBalance }}</v-card-text>

            <v-container>
              <v-text-field
                v-model="remotePeerId"
                :color="$store.state.primaryColor"
                label="User Session"
              ></v-text-field>
            </v-container>
            <v-card-actions>
              <v-spacer />
              <v-btn :color="$store.state.primaryColor" @click="connect"
                >Join</v-btn
              >
            </v-card-actions>
          </v-card></v-col
        >
      </v-row>
    </v-container></v-container
  >
</template>

<script>
import Peer from "peerjs";
import utils from "web3-utils";
import randomString from "random-string";
import bigNumber from "bignumber.js";
import moment from "moment";
export default {
  data() {
    return {
      reciepientBalance: 0,
      reciepientAddress: "",
      minTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      minutes: new Date().getMinutes(),
      hour: new Date().getHours(),
      otherSessionID: "",
      snackbar: false,
      vertical: true,
      step: 1,
      tokenAddress: "",
      tokenRules: [
        (v) => !!v || "Token address is required!",
        (v) => (v && utils.isAddress(v)) || "Invalid token address",
      ],
      amountRules: [
        (v) => !!v || "Amount is required!",
        (v) =>
          (v && !isNaN(v) && v > 0) ||
          "Invalid amount, amount must be greater than 0",
      ],
      symbol: "",
      decimals: 18,
      valid: false,
      sablierAddress: this.$store.state.sablier.options.address,
      approveAmount: 0,
      callView: false,
      callId: randomString({ length: 6 }),
      connection: null,
      connecting: true,
      message: "",
      messages: [],
      myPeer: null,
      myPeerId: "",
      remotePeerId: "",
      snackBarText: "",
      time: "",
      userToken: {},
      joinReciepientBalance: "Loading balance..",
    };
  },
  created() {
    console.log("this.$peer: ", this.$peer);
    console.log("myVideo: ", document.getElementById("myVideo"));
    this.myPeer = new Peer({ key: this.callId });
    this.$peer.on("open", (id) => {
      console.log("Connected at PeerJS server with success");
      this.$store.state.snackBarText =
        "Connected at PeerJS server with success";
      this.$store.state.snackbar = true;
      this.myPeerId = id;
      this.connecting = false;
    });
    this.$peer.on("call", (remoteCall) => {
      const getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      getUserMedia(
        { audio: true, video: true },
        (stream) => {
          remoteCall.answer(stream);
          remoteCall.on("stream", (remoteStream) => {
            const myVideo = document.getElementById("myVideo");
            console.log("found myVideo: ", myVideo);
            console.log("myVideo: ", myVideo);
            if (myVideo) {
              myVideo.srcObject = remoteStream;
              this.$store.state.snackBarText =
                "Connected with local Video and Audio";
              this.$store.state.snackbar = true;
              this.$refs.myVideo.play();
            }
          });
        },
        (error) => {
          console.error(error);
          _this.$store.state.isLoading = false;
          _this.$store.dispatch("error", "Something went wrong...");
        }
      );
    });
    this.$peer.on("connection", (con) => {
      this.connection = con;
      con.on("open", () => {
        con.on("data", (newMessage) => this.messages.push(newMessage));
      });
    });
    console.log("done mounted");
  },
  methods: {
    getStreamDetails: async function(peerId) {
      return new Promise(async (resolve) => {
        var found = false;
        var count = 0;
        var foundStream = null;
        if (this.$store.state.streams.length === 0) {
          resolve(null);
        } else {
          this.$store.state.streams.map((stream) => {
            count++;
            console.log("stream: ", stream);
            stream.streams.map((userStream) => {
              if (userStream.myPeerId == peerId) {
                console.log("found stream details: ", userStream);
                foundStream = userStream;
              }
            });

            if (count >= this.$store.state.streams.length) {
              resolve(foundStream);
            }
          });
        }
      });
    },
    getBalance: async function(streamId, address, decimals) {
      return new Promise(async (resolve) => {
        var balance = await this.$store.state.sablier.methods
          .balanceOf(streamId, address)
          .call({ gas: 5000000 });
        console.log("getBalance: ", balance);
        balance = new bigNumber(balance)
          .dividedBy(new bigNumber(10).pow(decimals))
          .toFixed(0);
        resolve(balance);
      });
    },
    connect: async function(remotePeerId) {
      let _this = this;
      this.$store.state.isLoading = true;
      if (this.remotePeerId.trim().length) {
        var stream = await Promise.resolve(
          _this.getStreamDetails(this.remotePeerId.trim())
        );
        console.log("stream: ", stream);
        if (stream) {
          _this.joinReciepientBalance = await Promise.resolve(
            _this.getBalance(
              stream.streamId,
              stream.sendAddress,
              stream.decimals
            )
          );
          _this.connection = _this.$peer.connect(_this.remotePeerId);
          _this.connection.on("open", () => {
            _this.connection.on("data", (newMessage) =>
              _this.messages.push(newMessage)
            );
          });
          const getUserMedia =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;
          if (getUserMedia) {
            _this.$store.state.snackBarText = "Got a UserMedia";
            _this.$store.state.snackbar = true;
            getUserMedia(
              { audio: true, video: true },
              (stream) => {
                const myCall = _this.$peer.call(_this.remotePeerId, stream);
                myCall.on("stream", (remoteStream) => {
                  const myVideo = document.getElementById("myVideo");
                  if (myVideo) {
                    myVideo.srcObject = remoteStream;
                    _this.$store.state.snackBarText =
                      "Connected with local Video and Audio";
                    _this.$store.state.snackbar = true;
                    _this.$refs.myVideo.play();
                    _this.$store.state.isLoading = false;
                  }
                });
              },
              (error) => {
                console.error(error);
                _this.$store.state.isLoading = false;
                _this.$store.dispatch("error", "Something went wrong...");
              }
            );
          }
        } else {
          _this.$store.dispatch(
            "error",
            "Something went wrong please ensure that you are not trying to join a valid session..."
          );
        }
        _this.$store.state.isLoading = false;
      } else {
        _this.$store.state.isLoading = false;
        _this.$store.dispatch("error", "Please enter a valid Remote Peer Id");
      }
    },
    checkReceipientBalance: async function(streamId, address) {
      var balance = await this.$store.state.sablier.methods
        .balanceOf(streamId, address)
        .call({ gas: 5000000 });
      console.log("currentReceipientBalance: ", balance);
      this.joinReciepientBalance = new bigNumber(balance)
        .dividedBy(
          new bigNumber(10).pow(this.$store.state.currentSessionStream.decimals)
        )
        .toFixed(0);
    },
  },
};
</script>

<style></style>
