//* v-for va nous permettre de boucler l'élément sur lequel il est accroché

//* Note: Je n'ai pas encore creusé le principe de boucles dans vue
//* comme une boucle dans une boucle par exemple
//* je n'ai pas non plus réussi à passer en props l'objet en entier
//* comme par exemple en react : <Currency {...item} />
//* qui correspond au contenu de l'objet envoyé en props

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
  //* updated pourrait correspondre à un useEffect en React, c'est ce qui me permet
  //* de relancer la recherche à chaques touches du clavier
  //* https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle-fr
  updated () {
    this.setSearch(this.search);
    // this.handleChangeSearch();
  }
};
</script>

<style scoped>
@media screen and (max-width: 499px) {
  .currencies {
    max-height: 100% !important;
  }
}
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
