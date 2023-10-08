<template>
  <div>
    <SearchComponent @search-results="handleSearchResults" />
    <router-link to="/favorites">Избранное</router-link>
    <div v-if="loading">Загрузка...</div>
    <div v-else>
      <div v-for="photo in photos" :key="photo.id">
        <router-link :to="'/photo/' + photo.id">
          <img :src="photo.urls.small" />
        </router-link>
        <button @click="addToFavorites(photo)">Добавить в избранное</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  name: "HomeComponent",
  components: {
    SearchComponent,
  },
  data() {
    return {
      photos: [],
      loading: false,
    };
  },
  created() {
    this.loadRandomPhotos();
  },
  methods: {
    async loadRandomPhotos() {
      try {
        const response = await axios.get("https://api.unsplash.com/photos/random", {
          headers: {
            Authorization: "Client-ID 8PgXaCI8Df4alcaR_8wtoybfsVJYtNj5RZ_1DOnJ0v0",
          },
          params: {
            count: 8,
          },
        });
        this.photos = response.data;
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    },
    addToFavorites(photo) {
      this.$store.commit("addToFavorites", photo);
    },
    handleSearchResults(results) {
      this.photos = results;
    },
  },
};
</script>
