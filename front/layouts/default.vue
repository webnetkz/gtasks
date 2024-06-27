<template>
  <div>
    <Header />
    <div id="content">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
import Header from '../components/header/Header.vue';


export default {
  components: {
    Header
  }  
}

</script>

<style scoped>
#content {
  height: calc(100vh - var(--height-header));
  padding: 20px;
  padding-top: calc(var(--height-header) + 20px);
}
</style>
