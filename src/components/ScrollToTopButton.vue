<template>
  <button v-show="showButton" @click="scrollToTop" class="scroll_to_top_button">
    <unicon  name="arrow-up" fill="#000" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.scroll_to_top_button {
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  color: #fff;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 4px 0px #00000040;
}

.scroll_to_top_button:hover {
  background-color: rgb(241, 241, 241);
}
</style>
