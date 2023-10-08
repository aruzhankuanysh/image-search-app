<template>
  <div>
    <h1>Избранное</h1>
    <div v-if="favorites.length === 0">Список избранного пуст</div>
    <div v-else>
      <div v-for="photo in favorites" :key="photo.id">
        <img :src="photo.urls.small" />
        <button @click="removeFromFavorites(photo)">Удалить из избранного</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
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
