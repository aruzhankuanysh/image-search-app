<template>
  <div>
    <div v-if="photo">
      <p>{{ photo.user.name }}</p>
      <img :src="photo.urls.full" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      photo: null,
    };
  },
  created() {
    const photoId = this.$route.params.id;
    this.loadPhotoDetails(photoId);
  },
  methods: {
    async loadPhotoDetails(photoId) {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/${photoId}`, {
          headers: {
            Authorization: "Client-ID 8PgXaCI8Df4alcaR_8wtoybfsVJYtNj5RZ_1DOnJ0v0",
          },
        });
        this.photo = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных о фотографии:", error);
      }
    },
  },
};
</script>
