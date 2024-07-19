<template>
  <v-container>
    <h2 class="mb-5">All Ingredients</h2>
    <v-row>
      <v-col
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center"
      >
        <v-sheet :elevation="7" :height="200" :width="250" border class="pa-2">
          {{ ingredient.name }}
          {{ ingredient.price }}
          {{ ingredient.type }}
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      ingredients: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:5000/ingredients");
    this.ingredients = response.data;
  },
});
</script>

<style></style>
