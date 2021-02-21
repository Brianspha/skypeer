<template>
  <v-container fluid>
    <v-container fluid>
      <v-toolbar :color="$store.state.primaryColor"
        ><v-toolbar-title color="white">My Profile</v-toolbar-title></v-toolbar
      >
      <v-container>
        <v-container>
          <v-card flat
            ><v-card-title>Streams Started</v-card-title>
            <v-card-text>
              <v-row>
                <v-col
                  v-for="(stream, i) in $store.state.myStreams"
                  :key="i"
                  cols="12"
                  md="4"
                >
                  <template>
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://gitcoin.co/dynamic/avatar/sablierhq"
                        lazy-src="https://gitcoin.co/dynamic/avatar/sablierhq"
                        contain
                      >
                      </v-img>
                      <v-card-subtitle class="pb-0">
                        <div>Receipient</div>
                        {{ stream.reciepientAddress }}
                      </v-card-subtitle>
                      <v-card-text class="text--primary">
                        <div>Streaming</div>
                        <div>{{ stream.balance }} {{ stream.symbol }}</div>
                      </v-card-text>
                      <v-card-text class="text--primary">
                        <div>Start Date</div>
                        <div>
                          <span>
                            {{
                              new Date(stream.startTime * 1000)
                                | moment("calendar")
                            }}</span
                          >
                        </div>
                      </v-card-text>
                      <v-card-text class="text--primary">
                        <div>My Peer Id</div>
                        <v-btn
                          v-clipboard="stream.myPeerId"
                          @click="showCopyMessage(stream.myPeerId)"
                        >
                          {{ stream.myPeerId }}</v-btn
                        >
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          :color="$store.state.primaryColor"
                          @click="cancelStream(stream)"
                          text
                        >
                          Cancel
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-container>
        <v-container>
          <v-card flat
            ><v-card-title>Streams Received</v-card-title>
            <v-card-text>
              <v-row>
                <v-col
                  v-for="(stream, i) in $store.state.receivedStreams"
                  :key="i"
                  cols="12"
                  md="4"
                >
                  <template>
                    <v-card class="mx-auto" max-width="400">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://gitcoin.co/dynamic/avatar/sablierhq"
                        lazy-src="https://gitcoin.co/dynamic/avatar/sablierhq"
                        contain
                      >
                      </v-img>
                      <v-card-subtitle class="pb-0">
                        <div>Receipient</div>
                        <div>{{ stream.sendAddress }}</div>
                      </v-card-subtitle>
                      <v-card-text class="text--primary">
                        <div>Received</div>
                        <div>{{ stream.balance }} {{ stream.symbol }}</div>
                      </v-card-text>
                      <v-card-text class="text--primary">
                        <div>Start Date</div>
                        <div>
                          <span>
                            {{
                              new Date(stream.startTime * 1000)
                                | moment("calendar")
                            }}</span
                          >
                        </div>
                      </v-card-text>
                      <v-card-text class="text--primary">
                        <div>My Peer Id</div>
                        <v-btn v-clipboard="stream.myPeerId">
                          {{ stream.myPeerId }}</v-btn
                        >
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-container>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import bigNumber from "bignumber.js";
export default {
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    // this.getStreamData();
  },
  watch: {
    "$store.state.myStreams": async function(newVal, oldVal) {
      this.$forceUpdate();
    },
    "$store.state.receivedStreams": async function(newVal, oldVal) {
      this.$forceUpdate();
    },
  },
  methods: {
    cancelStream: async function(stream) {
      console.log("cancelling stream: ", stream);
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
          this.$store.state.revision
        )
        .then((results) => {
          console.log("results of saving user data: ", results);
        });
    },
    clipboardSuccessHandler({ value, event }) {
      console.log("success", value);
    },
    onCopy(value) {
      console.log("copied value: ", value);
      return value;
    },
    clipboardErrorHandler({ value, event }) {
      console.log("error", value);
    },
    showCopyMessage(peerId) {
      this.$store.state.snackBarText = "Copied " + peerId + "to clipboard";
      this.$store.state.snackbar = true;
    },
  },
};
</script>

<style></style>
