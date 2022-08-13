<template>
  <h1>404 NOT FOUND</h1>
  <ReturnLink />
</template>

<script>
import ReturnLink from "@/modules/common/components/ReturnLink.vue";
export default {
  name: "NotFoundView",
  components: {
    ReturnLink,
  },
};
</script>

<style scoped>
h1 {
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
}
</style>
