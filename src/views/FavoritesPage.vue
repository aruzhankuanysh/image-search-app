//src/views/FavoritesPage
<template>
  <div>
    <header-component />
    <div class="horizontal_line"></div>
    <h1>Избранное</h1>
    <div v-if="favorites.length === 0"><h4>Список избранного пуст</h4></div>
    <div v-else>
      <image-collection :photos="favorites" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import ImageCollection from "@/components/ImageCollection.vue";
export default {
  name: "FavoritesPage",
  components: {
    HeaderComponent,
    ImageCollection,
  },
  computed: {
    favorites() {
      console.log(this.$store.state.favorites);
      return this.$store.state.favorites;
    },
  },
  methods: {
    removeFromFavorites(photo) {
      this.$store.commit("removeFromFavorites", photo);
    },
  },
};
</script>

<style scoped>
.horizontal_line {
  margin-bottom: 94px;
}
h1 {
  text-align: center;
  font-size: 72px;
}
h4 {
  text-align: center;
}
@media (max-width: 768px) {
.horizontal_line {
  margin-bottom: 40px;
}
  h1 {
  text-align: center;
  font-size: 36px;
}
}
</style>
