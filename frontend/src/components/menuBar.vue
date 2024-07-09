<template>
  <v-container>
    <v-layout>
      <div class="chips-center">
        <v-chip-group class="ma-1">
          <router-link :to="{ name: 'menuItems' }">
            <v-chip label class="mr-5" variant="outlined"> MenuItems </v-chip>
          </router-link>
          <router-link :to="{ name: 'ingredients' }">
            <v-chip label class="mr-5" variant="outlined"> Ingredients </v-chip>
          </router-link>
          <router-link :to="{ name: 'addMenuItem' }">
            <v-chip label class="mr-5" variant="outlined"> AddMenuItem </v-chip>
          </router-link>
          <router-link :to="{ name: 'addIngredient' }">
            <v-chip label class="mr-5" variant="outlined">
              AddIngredient
            </v-chip>
          </router-link>
        </v-chip-group>
      </div>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
.chips-center {
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Allow chips to wrap to the next line on smaller screens */

  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
}
</style>
