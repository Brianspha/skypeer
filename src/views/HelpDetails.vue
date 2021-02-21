<template>
  <v-dialog v-model="$store.state.helpDialog" persistent max-width="600">
    <v-card>
      <v-card-title class="headline">
        Help Details
      </v-card-title>
      <v-container>
        <v-form ref="form" lazy-validation>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="$store.state.selectedHelp.image"
            :lazy-src="$store.state.selectedHelp.image"
            contain
          >
          </v-img>
          <v-text-field
            v-model="$store.state.selectedHelp.title"
            :counter="100"
            label="Title"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="$store.state.selectedHelp.offer"
            :label="$store.state.selectedHelp.symbol"
            readonly
          ></v-text-field>
          <v-textarea
            v-model="$store.state.selectedHelp.description"
            label="Description"
            solo
            counter
            readonly
          ></v-textarea> </v-form
      ></v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :color="$store.state.primaryColor"
          text
          @click="$store.state.helpDialog = false"
        >
          Close
        </v-btn>
        <v-btn :color="$store.state.primaryColor" text @click="expressInterest">
          Express Interest
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    expressInterest() {
      console.log("expressed interest: ", this.$store.state.selectedHelp);
      this.$store.state.isLoading = true;
      this.$store.state.helpDialog = false;
      setTimeout(() => {
        this.$store.state.isLoading = false;
      }, 3000);
    },
  },
};
</script>

<style></style>
