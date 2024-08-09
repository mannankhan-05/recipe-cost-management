<template>
  <v-container class="pa-3">
    <h2 :class="{ 'text-center': xs, 'text-left': !xs }">Menu Items</h2>
    <v-row>
      <v-col
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center"
      >
        <v-card
          class="mt-5 rounded-lg"
          variant="tonal"
          width="350"
          height="380"
        >
          <img :src="menuItem.photo" class="menuItemImage" />
          <v-card-title>{{ menuItem.name }}</v-card-title>
          <v-card-text>{{ recipeElipses(menuItem.recipe, 50) }}</v-card-text>
          <div class="divider">
            <v-divider
              :thickness="2"
              class="border-opacity-25"
              color="info"
            ></v-divider>
          </div>

          <v-spacer></v-spacer>
          <v-card-actions>
            <div class="price">${{ menuItem.price }}</div>
            <v-spacer></v-spacer>
            <v-btn class="showFullButton" variant="outlined">Show Full</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      menuItems: [],
      xs: false,
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:5000/menuItems");
    this.menuItems = response.data;
    this.checkScreenSize();
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth < 600) {
        this.xs = true;
      } else {
        this.xs = false;
      }
    },
    recipeElipses(recipe: string, length: number): string {
      if (recipe.length > length) {
        return recipe.substring(0, length) + "...";
      }
      return recipe;
    },
  },
});
</script>

<style>
.showFullButton {
  position: absolute;
  bottom: 8px;
  right: 8px;
}

.price {
  position: absolute;
  bottom: 8px;
  left: 8px;
  font-size: 1.2rem;
  font-weight: bold;
}

.menuItemImage {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.divider {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
