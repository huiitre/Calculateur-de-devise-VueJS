<template>
  <footer className="converted-amount">
    <h2 className="converted-amount__amount">52.26</h2>
    <h3 className="converted-amount__currency">Dollars Américain</h3>
  </footer>
</template>

<script>
export default {
  name: "ConvertedAmount",
};
</script>

<style scoped>
.converted-amount {
  background-color: var(--color-light);
  padding: var(--gutter) var(--gutter);
  color: var(--color-main);
}
.converted-amount__amount {
  font-size: 1.5rem;
  font-weight: var(--weight-bold);
  margin-bottom: 0.5 * var(--gutter);
}

.converted-amount__currency {
  font-weight: var(--weight-regular);
}
</style>
