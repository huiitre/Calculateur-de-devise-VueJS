//* Simple bouton retour que j'utilise à la fois dans le module Converter
//* mais aussi dans la page 404

<template>
  <div class="return">
    <RouterLink class="return__link" to="/">Retour</RouterLink>
  </div>
</template>

<style scoped>
.return {
  margin: 0 auto;
}
.return__link {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
</style>
