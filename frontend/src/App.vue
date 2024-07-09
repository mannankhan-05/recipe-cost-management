<template>
  <v-app>
    <menuBar />
    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view />
      </v-slide-x-transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import menuBar from "./components/menuBar.vue";

export default defineComponent({
  name: "App",
  components: {
    menuBar,
  },

  data() {
    return {
      //
    };
  },
});
</script>
