//src/views/HomePage
<template>
  <div>
    <header-component />
    <search-component @search-images="searchImages" />
    <image-collection :photos="photos" />
    <scroll-to-top-button />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import SearchComponent from '@/components/header/SearchComponent.vue'
import ImageCollection from '@/components/ImageCollection.vue';
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    SearchComponent,
    ImageCollection,
    ScrollToTopButton,
  },
  data() {
    return {
      photos: [],
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
            Authorization: "Client-ID uj3HQGcBO4rhIzhvs0neDPnD5Uu0UstIRi_JIPpiXAo",
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
    async searchImages(searchTerm) {
      try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          headers: {
            Authorization: "Client-ID uj3HQGcBO4rhIzhvs0neDPnD5Uu0UstIRi_JIPpiXAo",
          },
          params: {
            query: searchTerm,
          },
        });
        this.photos = response.data.results;
      } catch (error) {
        console.error("Ошибка при выполнении запроса к API Unsplash:", error);
      }
    },
  },
};
</script>

