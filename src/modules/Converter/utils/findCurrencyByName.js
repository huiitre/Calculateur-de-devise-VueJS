//* Fonction qui me permet de trouver une devise par son nom
const findCurrencyByName = (array, string) => {
  return array.find((item) => item.name == string);
}

export default findCurrencyByName;