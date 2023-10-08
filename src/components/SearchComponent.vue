<template>
  <div>
    <input v-model="searchTerm" placeholder="Введите ключевое слово" />
    <button @click="searchImages">Поиск</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    async searchImages() {
      try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          headers: {
            Authorization: "Client-ID 8PgXaCI8Df4alcaR_8wtoybfsVJYtNj5RZ_1DOnJ0v0",
          },
          params: {
            query: this.searchTerm,
          },
        });

        this.$emit("search-results", response.data.results);
      } catch (error) {
        console.error("Ошибка при выполнении запроса к API Unsplash:", error);
      }
    },
  },
};
</script>
