<template>
  <div class="converter">
    <BaseAmount />
    <Toggler />
    <Currencies />
    <ConvertedAmount />
  </div>
  <ReturnLink />
</template>

<script>
import BaseAmount from "./BaseAmount.vue";
import Toggler from "./Toggler.vue";
import Currencies from "./Currencies.vue";
import ConvertedAmount from "./ConvertedAmount.vue";
import ReturnLink from "@/modules/common/components/ReturnLink.vue";

export default {
  name: "Converter-component",
  components: {
    BaseAmount,
    Toggler,
    Currencies,
    ConvertedAmount,
    ReturnLink,
  },
};
</script>

<style scoped>
.converter {
  max-width: 300px;
  margin: var(--gutter) auto;
  text-align: center;
}
</style>
