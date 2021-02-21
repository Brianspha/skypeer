<template>
   <v-card flat>
      <template>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            :counter="100"
            :rules="userNameRules"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="address"
            :rules="binanceAddressRules"
            label="Binance Address"
            required
          ></v-text-field>
          <v-btn :color="$store.state.primaryColor" @click="submit">
            Submit
          </v-btn>
        </v-form>
      </template>
    </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>