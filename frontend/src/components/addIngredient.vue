<template>
  <v-container>
    <v-row justify="space-around">
      <v-col v-for="elevation in elevations" :key="elevation" cols="12">
        <v-card
          :variant="variant"
          class="mx-auto form pa-10 border-md"
          max-width="500"
        >
          <h2
            :hidden="xs"
            class="text-center font-weight-md mb-3 text-decoration-underline"
          >
            Add A New Ingredient
          </h2>
          <v-text-field
            clearable
            label="Name"
            variant="outlined"
            type="text"
            v-model="name"
          ></v-text-field>
          <v-text-field
            clearable
            label="Price"
            variant="outlined"
            type="number"
            v-model="price"
          ></v-text-field>
          <v-file-input
            clearable
            name="ingredientImage"
            label="Picture"
            v-model="image"
            @change="handleFileChange($event)"
          >
            <template v-slot:selection="{ text }">
              <v-avatar v-if="imageUrl" size="30" class="mr-3 rounded">
                <img :src="imageUrl" alt="Selected Image" />
              </v-avatar>
              {{ text }}
            </template>
          </v-file-input>
          <v-select
            :items="['inventory', 'intermediate']"
            clearable
            label="Type"
            variant="outlined"
            v-model="type"
          ></v-select>
          <v-btn
            size="small"
            elevation="4"
            variant="outlined"
            class="buttonText pt-3 pb-3 pl-6 pr-6"
            :disabled="!name || !price || !type"
            @click="addIngredient()"
          >
            <div v-if="!buttonLoader">
              <v-icon class="mr-3">mdi-plus-circle</v-icon>
              <span>Add Ingredient</span>
            </div>
            <v-progress-circular v-else indeterminate></v-progress-circular>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    elevations: [0],
    variants: ["outlined"],
    xs: false,
    name: "",
    price: null as null | number,
    type: "",
    image: "",
    imageUrl: "",
    buttonLoader: false as boolean,
  }),
  methods: {
    checkWidth() {
      if (window.innerWidth < 600) {
        this.xs = true;
      } else {
        this.xs = false;
      }
    },
    async addIngredient() {
      this.buttonLoader = true;
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("price", this.price != null ? this.price.toString() : "");
      formData.append("type", this.type);
      formData.append("ingredientImage", this.image);

      await axios.post("http://localhost:5000/addIngredient", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      this.name = "";
      this.price = null;
      this.type = "";
      this.image = "";
      this.imageUrl = "";
      this.buttonLoader = false;
    },
    handleFileChange(event: any) {
      const file = event.target.files[0];
      if (file && file instanceof File) {
        this.imageUrl = URL.createObjectURL(file);
      } else {
        this.imageUrl = "";
      }
    },
  },
  mounted() {
    this.checkWidth();
  },
});
</script>

<style>
.sheet {
  height: 500px;
}

.form {
  width: 100%;
  height: 100%;
}

.buttonText {
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
