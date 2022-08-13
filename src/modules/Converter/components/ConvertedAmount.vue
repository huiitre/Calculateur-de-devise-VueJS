<template>
  <footer className="converted-amount">
    <h2 className="converted-amount__amount">{{ result != 0 ? result : '' }}</h2>
    <h3 className="converted-amount__currency">{{ currency }}</h3>
  </footer>
</template>

<script>
export default {
  name: "ConvertedAmount",
  props: ['result', 'currency'],
};
</script>

<style scoped>
.converted-amount {
  background-color: var(--color-light);
  padding: 2rem 0.8rem;
  color: var(--color-main);
}
.converted-amount__amount {
  font-size: 1.5rem;
  font-weight: var(--weight-bold);
  margin-bottom: var(--gutter);
}

.converted-amount__currency {
  font-weight: var(--weight-regular);
}
</style>
