<template>
  <Converter />
</template>

<script>
import Converter from "@/modules/Converter/components/Converter.vue";

export default {
  name: "ConverterView",
  components: {
    Converter,
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
</style>
