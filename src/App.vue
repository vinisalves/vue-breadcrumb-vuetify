<template>
  <v-app>
    <v-main>
      <BreadCrumb />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import BreadCrumb from "@/components/BreadCrumb.vue";

export default Vue.extend({
  name: "App",

  components: { BreadCrumb },

  data: () => ({
    //
  }),
});
</script>
