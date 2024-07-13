<template>
  <div>menuItems</div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  async mounted() {
    await axios
      .get("http://localhost:5000/menuItems")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style></style>
