//* Chaque page appelle un ou plusieurs composants
//* Ici on est sur la view du converter, on va donc aller chercher le composant Converter
//* depuis le dossier modules/Converter/components

//* A terme, en plus du dossier "components" qui contient les composants du module
//* et le dossier "utils" qui contient les utilitaires (ou les "services")
//* on aura un ou plusieurs dossiers pour gérer nos appels asynchrones
//* que j'appelle en général "hooks"

//* le module "common" contient les composants/utils/hooks qui seront utilisés
//* par plusieurs modules, ou du moins qui ne sont affiliés à aucuns d'eux
<template>
  <Converter />
</template>

<script>
//* Pour plus d'infos sur le "@", voir le fichier "jsonconfig.json" ligne 7
import Converter from "@/modules/Converter/components/Converter.vue";

export default {
  //* on définie un nom pour le composant actuel
  name: "ConverterView",
  //* la liste des composants qu'on a importé
  components: {
    Converter,
  },
};
</script>

<style scoped>
</style>
