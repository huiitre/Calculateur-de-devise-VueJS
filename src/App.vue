//* Affichage des vues de notre router
<template>
  <!-- <RouterView /> -->
  <ConverterView />
</template>

<script>
import ConverterView from './views/ConverterView.vue';

export default {
  components: {
    ConverterView
  }
}
</script>


<style src="@/assets/css/main.css"></style>
