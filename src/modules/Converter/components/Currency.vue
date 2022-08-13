<template>
	<li v-on:click="handleChangeCurrency" className="currency">{{ name }}</li>
</template>

//* Pour cibler un prop ou une propriété quelconque depuis une méthode
//* ou plus généralement depuis l'export défault, on va s'aider du "this"
<script>
export default {
	name: 'Currency-component',
	props: ['name', 'setCurrentCurrency'],
  methods: {
    handleChangeCurrency: function() {
      this.setCurrentCurrency(this.name);
    }
  }
};
</script>

<style scoped>
.currency {
	font-weight: var(--weight-regular);
	padding: var(--gutter) var(--gutter);
	border-top: solid 1px var(--color-main);
	cursor: pointer;
	/* // cette transition sera appliqué en quittant le survol */
	transition: background-color var(--transition-slow) ease-in;
}
.currency:hover {
	background-color: var(--color-alt);
	/* // celle-ci au survol */
	transition: background-color var(--transition-fast) ease-out;
}
</style>
