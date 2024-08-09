<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-card
          max-width="800"
          varian="outlined"
          elevation="0"
          class="mx-auto form pa-10 border-md scrollable-card"
        >
          <h2 class="text-decoration-underline text-center mb-3" :hidden="xs">
            Add A New MenuItem
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
            name="menuImage"
            variant="outlined"
            clearable
            label="Picture"
            v-model="picture"
            @change="handleFileChange($event)"
          >
            <template v-slot:selection="{ text }">
              <v-avatar v-if="imageUrl" size="30" class="mr-3 rounded">
                <img :src="imageUrl" alt="Selected Image" />
              </v-avatar>
              {{ text }}
            </template>
          </v-file-input>
          <v-textarea
            variant="outlined"
            label="Recipe"
            clearable
            v-model="recipe"
          ></v-textarea>
          <div class="divider">
            <v-divider
              :thickness="6"
              class="border-opacity-25 mt-10 mb-10"
              color="black"
            ></v-divider>
          </div>

          <h2 class="text-decoration-underline text-center mb-3" :hidden="xs">
            Select Ingredients
          </h2>

          <v-select
            clearable
            chips
            label="Select"
            :items="ingredientItems"
            multiple
            variant="outlined"
            v-model="selectedIngredients"
          ></v-select>

          <v-btn
            variant="outlined"
            @click="addMenuItem"
            :disabled="
              !name ||
              !price ||
              !picture ||
              !recipe ||
              selectedIngredients.length === 0
            "
          >
            <div v-if="!buttonLoader">
              <v-icon class="mr-3">mdi-plus-circle</v-icon>
              <span>Add MenuItem</span>
            </div>
            <v-progress-circular v-else indeterminate></v-progress-circular>
          </v-btn>
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
      xs: false as boolean,
      // array of tuples with ingredient name and price
      ingredientNames: [] as [number, string][],
      name: "" as string,
      price: 0 as number,
      picture: "" as string,
      recipe: "" as string,
      imageUrl: "" as string,
      selectedIngredients: [] as number[],
      buttonLoader: false as boolean,
    };
  },
  mounted() {
    this.checkWidth();
    this.getIngredients();
  },
  computed: {
    // To extract only ingredientNames from ingredientNames array
    ingredientItems(): string[] {
      // The function ([_, name]) => name returns only the name part of each tuple.
      return this.ingredientNames.map(([_, name]) => name);
    },
  },
  methods: {
    checkWidth() {
      if (window.innerWidth < 600) {
        this.xs = true;
      } else {
        this.xs = false;
      }
    },
    async getIngredients() {
      let response = await axios.get("http://localhost:5000/ingredients");
      response.data.forEach((ingredient: { id: number; name: string }) => {
        this.ingredientNames.push([ingredient.id, ingredient.name]);
      });
    },
    async addMenuItem() {
      this.buttonLoader = true;
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("price", this.price != null ? this.price.toString() : "");
      formData.append("menuImage", this.picture);
      formData.append("recipe", this.recipe);

      let result = await axios.post(
        "http://localhost:5000/addMenuItem",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // id of the added menuItem
      const id = result.data.id;
      console.log(id);

      await axios.post("http://localhost:5000/addMenuIngredient", {
        menuId: id,
        ingredientId: this.selectedIngredients.map((id) => id),
      });

      // selected ingredients
      console.log(this.selectedIngredients);

      this.name = "";
      this.price = 0;
      this.picture = "";
      this.recipe = "";
      this.imageUrl = "";
      this.selectedIngredients = [];
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
});
</script>

<style scoped>
.scrollable-card {
  overflow-y: auto;
  max-height: 600px;
}
</style>
