<template>
  <header className="base-amount">
    <h1 className="base-amount__title">Converter</h1>
    <h2 className="base-amount__amount">
      <input type="number" value="1" className="base-amount__value" />
      1 euro
    </h2>
  </header>
</template>

<script>
export default {
  name: "BaseAmount",
};
</script>

<style scoped>
.base-amount {
  background-color: var(--color-main);
  /* // on peut même faire des calculs en utilisant nos variables ! */
  padding: 2 * var(--gutter) var(--gutter);
  color: var(--color-light);
}
.base-amount__title {
  font-weight: var(--weight-bold);
  font-size: 1.5rem;
  margin-bottom: 0.5 * var(--gutter);
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
  margin-right: var(--gutter) / 2;
}
.base-amount__value:focus {
  box-shadow: inset 3px 3px 3px #00000080;
}
</style>
