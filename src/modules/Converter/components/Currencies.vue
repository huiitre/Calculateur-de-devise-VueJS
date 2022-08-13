<template>
  <div className="currencies">
    <input
      type="text"
      className="currencies__search"
      placeholder="Rechercher..."
    />
    <ul className="currencies__list">
      <Currency name="salut salut" />
    </ul>
  </div>
</template>

<script>
import Currency from "./Currency.vue";
export default {
  name: "Currencies-component",
  components: {
    Currency,
  },
};
</script>

<style scoped>
.currencies {
  background-color: var(--color-light);
  color: var(--color-main);
  text-align: left;

  max-height: 300px;
  overflow-y: auto;
}
.currencies__search {
  padding: var(--gutter) var(--gutter);
  width: 100%;
  border: none;
  color: var(--color-main);
  font-family: inherit;
}
.currencies__search::placeholder {
  color: var(--color-alt);
}
</style>
