<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-card
          max-width="800"
          varian="outlined"
          elevation="0"
          class="mx-auto form pa-10 border-md"
        >
          <h2 class="text-decoration-underline text-center" :hidden="xs">
            Add A New MenuItem
          </h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      xs: false as boolean,
    };
  },
  mounted() {
    this.checkWidth();
  },
  methods: {
    checkWidth() {
      if (window.innerWidth < 600) {
        this.xs = true;
      } else {
        this.xs = false;
      }
    },
  },
});
</script>

<style></style>
