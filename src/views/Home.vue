<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Home Page</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <ul>
          <li>
            <v-btn
              :to="{
                name: 'PageB',
                params: {
                  paramToPageB: 1,
                },
              }"
              >1</v-btn
            >
          </li>
          <li>
            <v-btn
              :to="{
                name: 'PageB',
                params: {
                  paramToPageB: 2,
                },
              }"
              >2</v-btn
            >
          </li>
          <li>
            <v-btn
              :to="{
                name: 'PageB',
                params: {
                  paramToPageB: 3,
                },
              }"
              >3</v-btn
            >
          </li>
          <li>
            <v-btn
              :to="{
                name: 'PageB',
                params: {
                  paramToPageB: 4,
                },
              }"
              >4</v-btn
            >
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
});
</script>
<style>
li {
  list-style: none;
}
</style>
