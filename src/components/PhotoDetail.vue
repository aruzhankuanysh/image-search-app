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
            Authorization: "Client-ID uj3HQGcBO4rhIzhvs0neDPnD5Uu0UstIRi_JIPpiXAo",
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
