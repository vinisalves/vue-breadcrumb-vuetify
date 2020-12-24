<template>
  <v-container>
    <v-row
      ><v-col class="text-center">
        <h1>Page B</h1>
      </v-col></v-row
    >
    <v-row>
      <v-col class="text-center">
        <v-btn
          class="mx-4"
          :to="{
            name: 'PageC',
            params: {
              paramToPageB: this.$route.params.paramToPageB,
            },
          }"
          >New</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>