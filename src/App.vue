//* Affichage des vues de notre router
<template>
  //? pour l'appli mobile on met en commentaire le routage et on affiche direct le composant
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
