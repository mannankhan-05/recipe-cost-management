<template>
  <v-container>
    <div class="chips-center">
      <v-chip-group class="ma-1 justify-center">
        <v-row wrap>
          <v-col cols="12" xs="8" sm="12" md="12" lg="12">
            <router-link :to="{ name: 'menuItems' }">
              <v-chip label class="mr-2" variant="outlined"> MenuItems </v-chip>
            </router-link>
            <router-link :to="{ name: 'ingredients' }">
              <v-chip label class="mr-2" variant="outlined">
                Ingredients
              </v-chip>
            </router-link>
            <router-link :to="{ name: 'addMenuItem' }">
              <v-chip label class="mr-2" variant="outlined">
                AddMenuItem
              </v-chip>
            </router-link>
            <router-link :to="{ name: 'addIngredient' }">
              <v-chip label class="mr-2" variant="outlined">
                AddIngredient
              </v-chip>
            </router-link>
          </v-col>
        </v-row>
      </v-chip-group>
    </div>
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
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
}
</style>
