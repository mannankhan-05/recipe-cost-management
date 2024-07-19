<template>
  <v-container>
    <h2 class="mb-5">All Ingredients</h2>
    <v-row>
      <v-col v-for="ingredient in ingredients" :key="ingredient.id">
        <v-sheet :elevation="7" :height="200" :width="200" border>
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
