<template>
  <div>
    <header-component />
    <div v-if="photo" class="container">
      <div
        class="bg_img"
        :style="{ backgroundImage: `url(${photo.urls.regular})` }"
      >
        <div class="bg-black-50"></div>
      </div>
      <div class="main_container">
        <div class="">
          <div class="img_info_container">
            <div class="user_info">
              <img :src="photo.user.profile_image.large" />
              <div class="user_name">
                <h2>{{ photo.user.name }}</h2>
                <h4>@{{ photo.user.username }}</h4>
              </div>
            </div>
            <div class="buttons">
              <button
                @click="toggleFavorites(photo)"
                :class="{ added_to_favorites: isAddedToFavorites(photo) }"
                class="add_favorite_btn"
              >
                <unicon name="heart-alt" fill="inherit" />
              </button>
              <button @click="download(photo)" class="download_btn">
                <a
                  :href="photo.links.download_location"
                  download
                  class="download_link"
                >
                  <unicon name="import" fill="inherit" />&nbsp; <span class="d_mobile_none">Download</span>
                </a>
              </button>
            </div>
          </div>
          <img :src="photo.urls.regular" class="color_image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import axios from "axios";
export default {
  name: "PhotoDetailPage",
  components: { HeaderComponent },
  data() {
    return {
      photo: null,
      downloadUrl: null,
    };
  },
  created() {
    const photoId = this.$route.params.id;
    this.loadPhotoDetails(photoId);
  },
  methods: {
    async loadPhotoDetails(photoId) {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/${photoId}`,
          {
            headers: {
              Authorization:
                "Client-ID uj3HQGcBO4rhIzhvs0neDPnD5Uu0UstIRi_JIPpiXAo",
            },
          }
        );
        this.photo = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных о фотографии:", error);
      }
    },
    async download(photo) {
      try {
        await axios.get(
          `https://api.unsplash.com/photos/${photo.id}/download`,
          {
            headers: {
              Authorization:
                "Client-ID uj3HQGcBO4rhIzhvs0neDPnD5Uu0UstIRi_JIPpiXAo",
            },
          }
        );

        const response = await axios.get(photo.links.download_location, {
          headers: {
            Authorization:
              "Client-ID uj3HQGcBO4rhIzhvs0neDPnD5Uu0UstIRi_JIPpiXAo",
          },
        });

        this.downloadUrl = response.data.url;

        this.startDownload();
      } catch (error) {
        console.error("Ошибка при скачивании фотографии:", error);
      }
    },
    startDownload() {
      if (this.downloadUrl) {
        const link = document.createElement("a");
        link.href = this.downloadUrl;
        link.download = "photo.jpg";
        link.click();
      }
    },
    addToFavorites(photo) {
      this.$store.commit("addToFavorites", photo);
    },
    isAddedToFavorites(photo) {
      const favorites = this.$store.state.favorites;
      return favorites.some((item) => item.id === photo.id);
    },
    toggleFavorites(photo) {
      if (this.isAddedToFavorites(photo)) {
        this.$store.commit("removeFromFavorites", photo);
      } else {
        this.$store.commit("addToFavorites", photo);
      }
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
.bg_img {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: grayscale(100%);
  height: 774px;
  width: 100%;
}

.bg-black-50 {
  background-color: rgba(0, 0, 0, 0.5);
  height: 774px;
}

.color_image {
  object-fit: cover;
  width: 100%;
  max-height: 744px;
  border-radius: 8px;
  filter: grayscale(0%) !important;
}

.img_info_container {
  position: relative;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user_info {
  display: flex;
  align-items: center;
  color: #fff !important;
}
.user_info img {
  width: 60px;
}
.user_name {
  margin-left: 10px;
}
.user_name h2,
.user_name h4 {
  font-weight: normal;
}
.buttons {
  display: flex;
}
.add_favorite_btn {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 10px;
}
.download_btn {
  height: 50px;
  border-radius: 8px;
  background-color: yellow;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
}
.download_link {
  display: flex;
  align-items: center;
}
.add_favorite_btn {
  cursor: pointer;
}
.added_to_favorites * {
  fill: rgb(255, 0, 13);
}
@media (max-width: 768px) {

}
@media (max-width: 576px) {
.bg_img {
  display: none;
}
.user_info {
  color: #000000 !important;
}
.user_name h2 {
  font-size: 18px;
}
.user_name h4 {
  font-size: 14px;
}
.add_favorite_btn {
  width: 40px;
  height: 40px;
}
.download_btn {
  width: 40px;
  height: 40px;
  padding: 6px;
}
}
</style>
