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
          ></v-text-field>
          <v-text-field
            clearable
            label="Price"
            variant="outlined"
          ></v-text-field>
          <v-select
            :items="['Inventory', 'Intermediate']"
            clearable
            label="Type"
            variant="outlined"
          ></v-select>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    elevations: [0],
    variants: ["outlined"],
    xs: false,
  }),
  methods: {
    checkWidth() {
      if (window.innerWidth < 600) {
        this.xs = true;
      } else {
        this.xs = false;
      }
    },
  },
  mounted() {
    this.checkWidth();
  },
};
</script>

<style>
.sheet {
  height: 500px;
}

.form {
  width: 100%;
  height: 100%;
}
</style>
