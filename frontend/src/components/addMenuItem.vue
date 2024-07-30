<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-card
          max-width="800"
          varian="outlined"
          elevation="0"
          class="mx-auto form pa-10 border-md scrollable-card"
        >
          <h2 class="text-decoration-underline text-center mb-3" :hidden="xs">
            Add A New MenuItem
          </h2>

          <v-text-field
            clearable
            label="Name"
            variant="outlined"
            type="text"
          ></v-text-field>
          <v-text-field
            clearable
            label="Price"
            variant="outlined"
            type="number"
          ></v-text-field>
          <v-file-input
            variant="outlined"
            clearable
            label="Picture"
          ></v-file-input>
          <v-textarea variant="outlined" label="Recipe" clearable></v-textarea>
          <div class="divider">
            <v-divider
              :thickness="6"
              class="border-opacity-25 mt-10 mb-10"
              color="black"
            ></v-divider>
          </div>
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

<style scoped>
.scrollable-card {
  overflow-y: auto;
  max-height: 600px;
}
</style>
