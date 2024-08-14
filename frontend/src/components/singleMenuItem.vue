<template>
  <v-container class="pa-3">
    <v-row>
      <v-col>
        <v-sheet> mannan khan is here. </v-sheet>
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
      menuItem: {} as object,
    };
  },
  async mounted() {
    await axios
      .get(`http://localhost:5000/menuItem/${this.$route.params.id}`)
      .then((response) => {
        this.menuItem = response.data;
      });
    console.log(this.menuItem);
  },
});
</script>

<style></style>
