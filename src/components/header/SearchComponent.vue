//src/components/hedaer/SearchComponent
<template>
  <div>
    <div class="main_search">
      <div class="bg-black-50">
        <div class="main_container">
          <div class="container">
            <input v-model="searchTerm" placeholder="Поиск" @keyup.enter="searchImages" />
            <button class="search_button" @click="searchImages">
              <unicon name="search" fill="#000" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="horizontal-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    searchImages() {
      this.$emit("search-images", this.searchTerm);
    },
  },
};
</script>

<style scoped>
.main_search {
  background-image: url('@/assets/headerbackground.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-black-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  width: 60%;
  height: 230px;
  margin: auto;
  display: flex;
  align-items: center;
}

input {
  background-color: #fff;
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 0 34px;
  border: none;
  border-start-start-radius: 5px;
  border-end-start-radius: 5px;
  font-size: 24px;
}

.search_button {
  background-color: #fff;
  padding: 0 34px;
  height: 70px;
  margin: 0;
  border: none;
  border-start-end-radius: 5px;
  border-end-end-radius: 5px;
  cursor: pointer;
}
@media (max-width: 576px) {
.container{
  width: 100%;
}
}
</style>
