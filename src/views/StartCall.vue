<template>
  <v-container fluid>
    <v-toolbar :color="$store.state.primaryColor"
      ><v-toolbar-title color="white">Start Call</v-toolbar-title></v-toolbar
    >
    <v-container v-if="!callView" fluid>
      <template>
        <v-stepper v-model="step" vertical>
          <v-stepper-step
            :color="$store.state.primaryColor"
            :complete="step > 1"
            step="1"
          >
            ERC20 Address
            <small
              >This is the token you wish to stream to the other party for the
              duration of the call</small
            >
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-card flat>
              <template>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="tokenAddress"
                    counter
                    :rules="tokenRules"
                    label="ERC20 Token Address"
                    required
                  ></v-text-field>
                </v-form>
              </template>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  v-if="tokenAddress && valid"
                  :color="$store.state.primaryColor"
                  @click="getTokenInfo"
                >
                  Continue
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-step
            :color="$store.state.primaryColor"
            :complete="step > 2"
            step="2"
          >
            Verify Token Information
            <small>This is to ensure that the provided token is valid</small>
          </v-stepper-step>
          <v-stepper-content step="2">
            <v-card flat>
              <template>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="tokenAddress"
                    counter
                    label="ERC20 Token Address"
                    readonly
                  ></v-text-field>
                  <v-text-field
                    v-model="symbol"
                    counter
                    label="Symbol"
                    readonly
                  ></v-text-field>
                  <v-text-field
                    v-model="decimals"
                    counter
                    label="Decimals"
                    readonly
                  ></v-text-field>
                </v-form>
              </template>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  :color="$store.state.primaryColor"
                  @click="step = step - 1"
                >
                  Back
                </v-btn>
                <v-btn :color="$store.state.primaryColor" @click="getTokenInfo">
                  Continue
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-step
            :color="$store.state.primaryColor"
            :complete="step > 3"
            step="3"
          >
            Approve Sablier Contract to Stream tokens to reciepient
            <small>This is to ensure that the provided token is valid</small>
          </v-stepper-step>
          <v-stepper-content step="3">
            <v-card flat>
              <template>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="sablierAddress"
                    counter
                    label="Sablier Contract Address"
                    readonly
                  ></v-text-field>
                  <v-text-field
                    v-model="reciepientAddress"
                    counter
                    :rules="tokenRules"
                    label="Reciepient Address"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="approveAmount"
                    :rules="amountRules"
                    label="Amount"
                  ></v-text-field>
                </v-form>
              </template>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  :color="$store.state.primaryColor"
                  @click="step = step - 1"
                >
                  Back
                </v-btn>
                <v-btn
                  :color="$store.state.primaryColor"
                  @click="approveSablier"
                >
                  Continue
                </v-btn></v-card-actions
              >
            </v-card>
          </v-stepper-content>
          <v-stepper-step
            :color="$store.state.primaryColor"
            :complete="step > 4"
            step="4"
          >
            End Time
            <small>Set the end time of the call and streaming of tokens</small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card flat>
              <template>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-time-picker
                    :color="$store.state.primaryColor"
                    v-model="time"
                    class="mt-4"
                    format="24hr"
                    scrollable
                    :min="minTime"
                  >
                  </v-time-picker>
                </v-form>
              </template>
              <v-card-actions>
                <v-spacer />
                <v-btn :color="$store.state.primaryColor" @click="startCall">
                  Schedule Streamed Call
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </v-stepper>
      </template>
    </v-container>
    <v-container v-else fluid>
      <v-row>
        <v-col><video width="800" ref="myVideo" id="myVideo"></video></v-col>
        <v-col>
          <v-card>
            Session ID
            <v-card-text>{{ myPeerId }}</v-card-text>
            Amount of {{ symbol }} Streamed
            <v-card-text>{{ reciepientBalance }}</v-card-text>

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
              <v-btn :color="$store.state.primaryColor" @click="cancelStream"
                >Cancel Stream</v-btn
              >
            </v-card-actions>
          </v-card></v-col
        >
      </v-row>
    </v-container>
  </v-container>
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
      symbol: "BNB",
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
    };
  },
  components: {},
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
        (error) => this.$store.dispatch("error", error(error))
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
  mounted() {
    // _this.$store.state.isLoading = true;
    console.log(
      "minTime: ",
      this.minTime,
      " this.$store.state.userAddress: ",
      this.$store.state.userAddress
    );
    // _this.$store.state.isLoading = false;
  },
  methods: {
    cancelStream() {
      console.log("cancelling: ", this.$store.state.currentSessionStream);
    },
    connect() {
      let _this = this;
      if (this.remotePeerId.trim().length) {
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
        _this.$store.dispatch("error", "Please enter a valid Remote Peer Id");
      }
    },
    getTokenInfo: async function() {
      let _this = this;
      if (!utils.isAddress(this.tokenAddress)) {
        this.$store.dispatch("error", "Invalid Token Address");
      } else {
        this.$store.state.isLoading = true;
        var contract = new this.$store.state.binanceContract(
          this.$store.state.iERC20,
          this.tokenAddress
        );
        this.userToken = contract;
        console.log("contract: ", contract);
        contract.methods
          .symbol()
          .call({ gas: 5000000 })
          .then((symbol, error) => {
            contract.methods
              .name()
              .call({ gas: 5000000 })
              .then((name, error) => {
                contract.methods
                  .decimals()
                  .call({ gas: 5000000 })
                  .then((decimals, error) => {
                    _this.symbol = symbol;
                    _this.decimals = decimals;
                    console.log(
                      "symbol: ",
                      symbol,
                      " name: ",
                      name,
                      " decimals: ",
                      decimals
                    );
                    _this.$store.state.isLoading = false;
                    _this.step++;
                  });
              });
          })
          .catch((error) => {
            _this.$store.state.isLoading = false;
            console.log("something went wrong: ", error);
            _this.$store.dispatch(
              "error",
              "Something went wrong whilst getting token info please ensure this is a valid ERC20 token address"
            );
          });
      }
    },
    calculateDeposit(delta, deposit) {
      var diff = deposit.minus(deposit.minus(deposit.mod(delta)));
      deposit = new bigNumber(deposit).minus(diff);
      console.log("deposit.toFixed(): ", deposit.toFixed());
      return deposit;
    },
    checkReceipientBalance: async function() {
      var balance = await this.$store.state.sablier.methods
        .balanceOf(
          this.$store.state.currentSessionStream.streamId,
          this.$store.state.currentSessionStream.reciepientAddress
        )
        .call({ gas: 5000000 });
      console.log("currentReceipientBalance: ", balance);
      this.reciepientBalance = new bigNumber(balance)
        .dividedBy(
          new bigNumber(10).pow(this.$store.state.currentSessionStream.decimals)
        )
        .toFixed(0);
    },
    startCall() {
      this.$store.state.isLoading = true;
      var times = this.time.split(":");
      if (times.length === 2) {
        var tempStartTime = new bigNumber(
          new Date(new Date().setMinutes(new Date().getMinutes() + 3)).getTime()
        ).dividedBy(1000);
        tempStartTime = tempStartTime.decimalPlaces(0).toFixed();
        var currentDate = new Date();
        currentDate.setHours(new Date().getHours() + times[0]);
        currentDate.setMinutes(new Date().getMinutes() + times[1]);
        var endDate = new bigNumber(currentDate.getTime()).dividedBy(1000);
        endDate = endDate.decimalPlaces(0).toFixed(0);
        var timeDelta = new bigNumber(tempStartTime - endDate);
        console.log("timeDelta: ", timeDelta);
        this.approveAmount = this.calculateDeposit(
          timeDelta,
          new bigNumber(this.approveAmount).multipliedBy(
            new bigNumber(10).pow(this.decimals)
          )
        );
        this.approveAmount = this.approveAmount.decimalPlaces(0).toFixed(0);
        console.log(
          "tempStartTime: ",
          tempStartTime,
          " endDate: ",
          endDate,
          " deposit: ",
          this.approveAmount,
          " sablierAddress: ",
          this.$store.state.sablier.options.address
        );
        let _this = this;
        this.$store.state.sablier.methods
          .createStream(
            this.reciepientAddress,
            this.approveAmount,
            this.tokenAddress,
            tempStartTime,
            endDate
          )
          .send({ gas: 6000000, from: this.$store.state.userAddress })
          .then((receipt, error) => {
            console.log("receipt: ", receipt, " error: ", error);
            if (error) {
              _this.$store.dispatch(
                "error",
                "Something went wrong whilst starting stream"
              );
            } else {
              var streamId = receipt.events.CreateStream.returnValues.streamId;

              _this.$store.state.currentSessionStream = {
                streamId: streamId,
                tokenAddress: _this.tokenAddress,
                sendAddress: _this.$store.state.userAddress,
                reciepientAddress: _this.reciepientAddress,
                decimals: _this.decimals,
                symbol: _this.symbol,
                balance: 0,
                startTime: tempStartTime,
                myPeerId: _this.myPeerId,
              };

              var streams = JSON.parse(localStorage.getItem("streams"));
              var added = false,
                addedRec = false;
              if (!streams) {
                streams = {
                  streams: [],
                };
              }
              streams.streams = streams.streams.map((user) => {
                if (user.address === _this.$store.state.userAddress) {
                  user.streams.push({
                    streamId: streamId,
                    tokenAddress: _this.tokenAddress,
                    sendAddress: _this.$store.state.userAddress,
                    reciepientAddress: _this.reciepientAddress,
                    decimals: _this.decimals,
                    symbol: _this.symbol,
                    balance: 0,
                    startTime: tempStartTime,
                    myPeerId: _this.myPeerId,
                  });
                  added = true;
                }
                return user;
              });
              if (!added) {
                streams.streams.push({
                  address: _this.$store.state.userAddress,
                  streams: [
                    {
                      streamId: streamId,
                      tokenAddress: _this.tokenAddress,
                      sendAddress: _this.$store.state.userAddress,
                      reciepientAddress: _this.reciepientAddress,
                      decimals: _this.decimals,
                      symbol: _this.symbol,
                      balance: 0,
                      startTime: tempStartTime,
                      myPeerId: _this.myPeerId,
                    },
                  ],
                });
              }
              streams.streams = streams.streams.map((user) => {
                if (user.address === _this.reciepientAddress) {
                  user.streams.push({
                    streamId: streamId,
                    tokenAddress: _this.tokenAddress,
                    sendAddress: _this.$store.state.userAddress,
                    reciepientAddress: _this.reciepientAddress,
                    decimals: _this.decimals,
                    symbol: _this.symbol,
                    balance: 0,
                    startTime: tempStartTime,
                    myPeerId: _this.myPeerId,
                  });
                  addedRec = true;
                }
                return user;
              });
              if (!addedRec) {
                streams.streams.push({
                  address: _this.reciepientAddress,
                  streams: [
                    {
                      streamId: streamId,
                      tokenAddress: _this.tokenAddress,
                      sendAddress: _this.$store.state.userAddress,
                      reciepientAddress: _this.reciepientAddress,
                      decimals: _this.decimals,
                      symbol: _this.symbol,
                      balance: 0,
                      startTime: tempStartTime,
                      myPeerId: _this.myPeerId,
                    },
                  ],
                });
              }

              //localStorage.setItem("streams", JSON.stringify(streams));
              _this.$store.state.isLoading = false;
              _this.callView = true;
              _this.saveData(streams);
              _this.getStreamData();
              setInterval(async () => {
                await _this.checkReceipientBalance();
              }, 1 * 1000);
            }
          })
          .catch((error) => {
            console.log("error whislt starting stream: ", error);
            _this.$store.dispatch(
              "error",
              "Something went wrong whilst starting stream"
            );
            _this.$store.state.isLoading = false;
          });
      } else {
        _this.$store.state.isLoading = false;
        this.$store.dispatch(
          "error",
          "Time must have both minutes and hours selected"
        );
      }
    },
    getSkyData: async function() {
      var test = await this.$store.state.client.db.getJSON(
        this.$store.state.publicKey,
        this.$store.state.appSecret
      );
      return test;
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
    approveSablier() {
      this.$store.state.isLoading = true;
      if (this.approveAmount > 0 && utils.isAddress(this.reciepientAddress)) {
        let _this = this;
        this.userToken.methods
          .approve(
            this.sablierAddress,
            new bigNumber(this.approveAmount).multipliedBy(
              new bigNumber(10).pow(this.decimals)
            )
          )
          .send({ gas: 6000000, from: this.$store.state.userAddress })
          .then((receipt, error) => {
            console.log("receipt: ", receipt, " error: ", error);
            if (error) {
              _this.$store.dispatch(
                "error",
                "Something went wrong whilst approving token streaming contract"
              );
            } else {
              _this.$store.state.isLoading = false;
              _this.step++;
              // console.log("streamId: ", streamId);
            }
          })
          .catch((error) => {
            console.log("error approving sablier contract: ", error);
            _this.$store.state.isLoading = false;
            _this.$store.dispatch(
              "error",
              "Something went wrong whilst approving token streaming contract"
            );
          });
      } else {
        this.$store.dispatch(
          "error",
          "Amount must be greater than 0 and a valid receipient address must be provided"
        );
        this.$store.state.isLoading = false;
      }
    },
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
      for (var i = 0; i < _this.$store.state.myStreams.length; i++) {
        var userStream = _this.$store.state.myStreams[i];
        console.log("userStream: ", userStream);
        var balance = await Promise.resolve(
          _this.getBalance(
            userStream.streamId,
            userStream.sendAddress,
            userStream.decimals
          )
        );
        userStream.balance = balance;
        console.log("senderBalance: ", userStream.balance);
        //userStream = await Promise.resolve(userStream);
        console.log("userStream myStreams: ", userStream);
        _this.$store.state.myStreams[i] = userStream;
      }
      for (i = 0; i < _this.$store.state.receivedStreams.length; i++) {
        userStream = _this.$store.state.receivedStreams[i];
        console.log("userStream: ", userStream);
        balance = await Promise.resolve(
          _this.getBalance(
            userStream.streamId,
            userStream.reciepientAddress,
            userStream.decimals
          )
        );
        userStream.balance = balance;
        console.log("senderBalance: ", userStream.balance);
        //userStream = await Promise.resolve(userStream);
        console.log("userStream myStreams: ", userStream);
        _this.$store.state.receivedStreams[i] = userStream;
      }
      _this.$store.state.isLoading = false;
    },
    getBalance: async function(streamId, address, decimals) {
      return new Promise(async (resolve) => {
        this.$store.state.sablier.methods
          .balanceOf(streamId, address)
          .call({ gas: 5000000 })
          .then((balance) => {
            console.log("getBalance: ", balance);
            balance = new bigNumber(balance)
              .dividedBy(new bigNumber(10).pow(decimals))
              .toFixed(0);
            resolve(balance);
          })
          .catch((error) => {
            console.log("error getting balance: ", error);
            resolve(0);
          });
      });
    },
  },
};
</script>

<style lang="css" scoped>
.call__preview {
  bottom: 1rem;
  left: 1rem;
  position: fixed;
  width: 250px;
}
.call__container {
  display: flex;
}
.call__fields {
  display: flex;
}
.call__field {
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  color: #393939;
  font-size: 2rem;
  padding: 1rem 2rem;
  width: 100%;
}
.call__field[readonly] {
  background: #fafafa;
  color: #808080;
  pointer-events: none;
}
.call__field:focus {
  outline: none;
}
.call__connect {
  background: #00cc99;
  border: none;
  color: #fdfdfd;
  font-size: 1.5rem;
  padding: 1rem;
  transition: background 0.2s ease-in;
}
.call__connect:focus {
  outline: none;
}
.call__connect:hover {
  background: #009973;
  cursor: pointer;
}
.call__stream {
  height: calc(100vh - 68px);
  flex-grow: 1;
  -o-object-fit: fill;
  object-fit: fill;
}
.call__messages {
  border-left: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25vw;
}
.call__messages___list {
  flex-grow: 1;
  overflow-y: scroll;
  padding: 2rem;
}
.call__messages___row {
  margin-bottom: 1rem;
  text-align: left;
}
.call__messages___row.is-mine {
  text-align: right;
}
.call__messages___message {
  display: inline-block;
  background: #dcdcdc;
  border-radius: 10px;
  color: #595959;
  padding: 1rem;
}
.call__messages___message.is-mine {
  background: #bfbfbf;
}
.call__messages___form {
  display: flex;
}
.call__messages___field {
  border: 1px solid #dcdcdc;
  border-left: none;
  border-right: none;
  color: #393939;
  padding: 1rem;
  width: 100%;
}
.call__messages___field:focus {
  outline: none;
}
.call__messages___send {
  background: #00cc99;
  border: none;
  color: #fdfdfd;
  padding: 1rem;
}
.call__messages___send:focus {
  outline: none;
}
</style>
