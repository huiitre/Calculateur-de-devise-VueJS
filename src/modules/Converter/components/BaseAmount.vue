//* @change est une autre version de v-on:change="handleChangeAmount"
//* ou en React/JavaScript : onChange={handleChangeAmount}

//* v-model, l'équivalent de notre value=""
//* https://v2.vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model

<template>
  <header className="base-amount">
    <h1 className="base-amount__title">Converter</h1>
    <h2 className="base-amount__amount">
      <input @change="handleChangeAmount" type="number" v-model="amount" className="base-amount__value" />
      euro
    </h2>
      
  </header>
</template>

<script>
export default {
  name: "BaseAmount",
  props: ['amount', 'setAmount'],
  methods: {
    handleChangeAmount: function() {
      this.setAmount(this.amount);
    }
  }
};
</script>

<style scoped>
.base-amount {
  background-color: var(--color-main);
  /* // on peut même faire des calculs en utilisant nos variables ! */
  padding: 2rem var(--gutter);
  color: var(--color-light);
}
.base-amount__title {
  font-weight: var(--weight-bold);
  font-size: 1.5rem;
  margin-bottom: var(--gutter);
}

.base-amount__amount {
  font-weight: var(--weight-light);
}

.base-amount__value {
  background: transparent;
  border: 0;
  font: inherit;
  color: var(--color-light);
  width: 4em;
  margin-right: 0.4rem;
}
.base-amount__value:focus {
  box-shadow: inset 3px 3px 3px #00000080;
}
</style>
