<template>
  <v-container>
    <v-toolbar :color="$store.state.primaryColor"
      ><v-toolbar-title color="white">Seek Help</v-toolbar-title></v-toolbar
    >
    <v-card flat>
      <template>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="heading"
            :counter="100"
            :rules="headingRules"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="amount"
            :rules="amountRules"
            label="Amount in BUSD"
            required
          ></v-text-field>
          <v-textarea
            v-model="description"
            :rules="descriptionRules"
            label="Please explain the problem your facing"
            required
            solo
            counter
          ></v-textarea>
          <v-file-input
            v-model="file"
            show-size
            counter
            accept="image/*"
            label="Image"
          ></v-file-input>
          <v-btn
            v-if="valid"
            :color="$store.state.primaryColor"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-form>
      </template>
    </v-card></v-container
  >
</template>

<script>
export default {
  data: () => ({
    valid: true,
    heading: "",
    headingRules: [
      (v) => !!v || "Title is required",
      (v) =>
        (v && v.length >= 2) ||
        "Title must be greater than equal to 2 characters",
    ],
    amount: 0,
    amountRules: [
      (v) => !!v || "BUSD amount is required",
      (v) => (v && !isNaN(v)) || "Amount must be a valid number",
    ],
    description: "",
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) =>
        (v && v.length >= 50) ||
        "Description must be greter than equal to 50 characters",
    ],
    file: {},
    fileRules: [
      (value) =>
        !value ||
        value.size < 100000000 ||
        "File size should be less than 100 MB!",
    ],
  }),
  methods: {
    submit() {
      console.log("submitting");
      this.$store.state.isLoading = true;
      setTimeout(() => {
        this.$store.state.isLoading = false;
      }, 3000);
    },
  },
};
</script>

<style></style>
