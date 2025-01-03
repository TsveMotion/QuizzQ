<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: { Header, Footer },
});
</script>

<template>
  <Header />
  <router-view />  <!-- This will render the correct page based on the route -->
  <Footer />
</template>

<style scoped>
/* Add your styles here */
</style>
