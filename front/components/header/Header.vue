<template>
  <header>
    <NuxtLink to="/" class="logo">
      <Profile />
    </NuxtLink>
  </header>
</template>

<script>
import Profile from './profile/Profile.vue';


export default {
  components:
  {
    Profile
  }  
}
</script>

<style scoped>
header {
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px 8px 10px;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--height-header);
  background: var(--white);
  box-shadow: var(--shadow);
}
.logo img {
  height: 30px;
}
</style>