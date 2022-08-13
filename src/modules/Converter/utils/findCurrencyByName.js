const findCurrencyByName = (array, string) => {
  return array.find((item) => item.name == string);
}

export default findCurrencyByName;