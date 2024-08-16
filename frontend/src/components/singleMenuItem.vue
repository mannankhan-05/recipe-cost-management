<template>
  <v-container class="pa-3">
    <div class="text-line upper-text-line"></div>
    <h1 class="name font-italic font-weight-medium">
      {{ menuItem.name }}
    </h1>
    <div class="text-line lower-text-line"></div>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6">
        <v-sheet>
          <img class="menuImage" :src="menuItem.photo" alt="" />
        </v-sheet>
      </v-col>

      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
        <div class="recipe">
          <h2 class="text-decoration-underline font-weight-medium">Recipe :</h2>
          <h3 class="font-weight-regular">{{ menuItem.recipe }}</h3>
        </div>
      </v-col>

      <div class="line first-line"></div>
      <div class="line second-line"></div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      menuItem: {} as object,
      ingredients: [] as object[],
    };
  },
  async mounted() {
    await axios
      .get(`http://localhost:5000/menuItem/${this.$route.params.id}`)
      .then((response) => {
        this.menuItem = response.data;
      });

    await axios
      .get(`http://localhost:5000/getMenuIngredient/${this.$route.params.id}`)
      .then((response) => {
        this.ingredients = response.data;
      });
    console.log(this.ingredients);
  },
});
</script>

<style>
.menuImage {
  width: 100%;
  height: 10%;
  border: 0.5px solid black;
  border-radius: 5px;
}

.recipe {
  margin-top: 10px;
  margin-left: 20px;
}

.name {
  width: 100%;
  text-align: center;
}

.text-line {
  width: 50%;
  border: 0.5px solid black;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
}

.upper-text-line {
  margin-top: 20px;
}

.lower-text-line {
  margin-bottom: 20px;
}

.line {
  width: 100%;
  border: 0.5px solid black;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
  margin: 2px 0;
}

.first-line {
  margin-top: 30px;
}

.second-line {
  margin-bottom: 30px;
}
</style>
