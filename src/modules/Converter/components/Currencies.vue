<template>
  <div className="currencies">
    <input
      type="text"
      className="currencies__search"
      placeholder="Rechercher..."
      v-model="search"
      @change="handleChangeSearch"
    />
    <ul className="currencies__list">
      <Currency v-for="item in currencies" :key="item.id" :name="item.name" :setCurrentCurrency="setCurrentCurrency" />
    </ul>
  </div>
</template>

<script>
import Currency from "./Currency.vue";

export default {
  name: "Currencies-component",
  props: ['currencies', 'setCurrentCurrency', 'search', 'setSearch'],
  components: {
    Currency,
  },
  methods: {
    /* handleChangeSearch: function() {
      this.setSearch(this.search)
    } */
  },
  updated () {
    this.setSearch(this.search);
    // this.handleChangeSearch();
  }
};
</script>

<style scoped>
.currencies {
  background-color: var(--color-light);
  color: var(--color-main);
  text-align: left;

  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
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
