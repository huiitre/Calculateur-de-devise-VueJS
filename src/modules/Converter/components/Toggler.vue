<template>
  <button
    v-on:click="handleChangeOpen"
    class="toggler"
    :class="{'toggler--open': open}"
    type="button"
  >=</button>
</template>

<script>
export default {
  name: "Toogler-component",
  props: ['handleChangeOpen', 'open'],
};
</script>

<style scoped>
.toggler {
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  margin: -25px auto;
  display: block;
  border-radius: 50%;
  border: 4px solid var(--color-main);
  background-color: var(--color-light);
  color: var(--color-main);
  font-weight: bold;
  font-size: 2em;
  transition: transform var(--transition-fast),
    background-color var(--transition-fast);
}
.toggler:hover {
  background-color: var(--color-alt);
  cursor: pointer;
}

.toggler--open {
  transform: rotate(90deg);
}
</style>
