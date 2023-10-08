//src/components/ImageCollections
<template>
  <div class="main_container">
      <div v-if="loading">З.агрузка...</div>
      <div v-else class="container">
        <div v-for="photo in photos" :key="photo.id" class="img_card">
          <router-link :to="'/photo/' + photo.id">
            <img :src="photo.urls.small" />
          </router-link>
          <button @click="toggleFavorites(photo)" :class="{ 'added_to_favorites': isAddedToFavorites(photo) }" class="add_favorite_btn">
            <unicon name="heart-alt" fill="inherit" />
          </button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "ImageCollection",
  props: {
    photos: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false, 
    };
  },
  methods: {
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
.container{
  margin-top: 114px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}
.img_card{
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
}

.img_card img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.add_favorite_btn{
  position: absolute;
  background-color: transparent;
  border: none;
  top: 16px;
  right: 16px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.2s;
  fill: #fff;

}
.add_favorite_btn:hover{
  transform: scale(1.5);
}
.added_to_favorites *{
  fill: rgb(255, 0, 13);
}
@media (max-width: 768px) {
.container{
  margin-top: 56px;
  grid-template-columns: repeat(2, 1fr);
}
}
@media (max-width: 576px) {
.container{
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
}
}
</style>
