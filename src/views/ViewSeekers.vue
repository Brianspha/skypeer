<template>
  <v-container fluid>
    <v-toolbar :color="$store.state.primaryColor"
      ><v-toolbar-title color="white">Help Listings</v-toolbar-title></v-toolbar
    >
    <v-container>
      <v-row>
        <v-col v-for="(help, i) in helpListings" :key="i" cols="12" md="4">
          <template>
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="help.image"
                :lazy-src="help.image"
                contain
              >
              </v-img>
              <v-card-subtitle class="pb-0">
                {{ help.title }}
              </v-card-subtitle>
              <v-card-text class="text--primary">
                <div></div>
                <div>{{ help.offer }} {{ help.symbol }}</div>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn :color="$store.state.primaryColor" text>
                  Share
                </v-btn>
                <v-btn
                  :color="$store.state.primaryColor"
                  @click="
                    $store.state.selectedHelp = help;
                    $store.state.helpDialog = true;
                  "
                  text
                >
                  View
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-col>
        <help-details />
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import HelpDetails from "./HelpDetails.vue";
import moment from "moment";
export default {
  components: { HelpDetails },
  data() {
    return {
      helpListings: [
        {
          title: "Fixing PC",
          description: "Some description",
          offer: Math.round(Math.random() * 1000),
          symbol: "BUSD",
          image:
            "https://siasky.net/jADFrSduk_SJkvFSRIjcOCcPtvm8_hDlhfb3AxIX_JtuAg",
          meetingDate: moment(
            new Date().getMinutes() + Math.round(Math.random() * 4),
            "DD-MM-YYYY"
          ),
        },
      ],
    };
  },
};
</script>

<style></style>
