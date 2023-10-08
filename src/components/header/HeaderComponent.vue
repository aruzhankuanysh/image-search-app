//src/components/hedaer/HeaderComponent
<template>
  <div  :class="{'main_header': isMainPage, 'other_header': !isMainPage}">
    <div class="main_container container">
      <div>
        <router-link to="/">
          <img :class="{'main_logo': isMainPage, 'other_logo': !isMainPage}" src="@/assets/logo.png" />
        </router-link>
      </div>
      <div class="navbar">
        <router-link to="/" style='margin-right: 20px'>
          <unicon name="search" fill="#fff" />
          <span class="d_mobile_none">Поиск</span>
        </router-link>
        <router-link to="/favorites">
          <unicon name="heart-alt" fill="#fff" />
          <span class="d_mobile_none">Избранное</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    isMainPage() {
      return this.$route.path === '/';
    }
  },
  methods: {},
};
</script>
<style scoped>
.main_header{
  background-color: black;
  color: #ffffff;
  max-height: 120px;
  height: 120px;
  display: flex;
}

.other_header{
  background-color: black;
  color: #ffffff;
  max-height: 80px;
  height: 80px;
  display: flex;
}

.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.main_logo{
  width: 186px;
}
.other_logo{
  width: 112px;
}
.navbar{
  display: flex;
}
.navbar *{
  display: flex;
  align-items: center;
  font-size: 18px;
}
.unicon{
  margin-right: 6px;
}

</style>
