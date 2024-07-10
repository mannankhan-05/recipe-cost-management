<template>
  <div>menuItems</div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  async mounted() {
    let response = await axios.get("http://localhost:5000/menuItems");
    console.log(response.data);
  },
});
</script>

<style></style>
