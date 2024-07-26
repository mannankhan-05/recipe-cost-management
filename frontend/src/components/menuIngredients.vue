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
          <img :src="ingredient.picture" class="image" />
          <h3>{{ ingredient.name }}</h3>
          <div class="divider">
            <v-divider
              :thickness="2"
              class="border-opacity-25"
              color="info"
            ></v-divider>
          </div>
          <div class="d-flex align-center">
            <h3 class="mb-0 mr-auto">{{ ingredient.price }}$</h3>
            <p class="mb-0 justify-end">{{ ingredient.type }}</p>
          </div>
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

<style>
.image {
  height: 50%;
  width: 100%;
  border-radius: 3px;
  margin-left: 0px;
}

.divider {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
