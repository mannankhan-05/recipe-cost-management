<template>
  <div class="pa-3">
    <h2>Menu Items</h2>
    <v-card
      class="mt-5"
      variant="tonal"
      v-for="menuItem in menuItems"
      :key="menuItem.id"
    >
      <v-card-title>{{ menuItem.name }}</v-card-title>
      <v-card-text>{{ menuItem.recipe }}</v-card-text>
      <v-card-actions>
        <div>${{ menuItem.price }}</div>
        <v-spacer></v-spacer>
        <v-btn variant="outlined">Show Full</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      menuItems: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:5000/menuItems");
    this.menuItems = response.data;
    console.log(this.menuItems);
  },
});
</script>

<style></style>
