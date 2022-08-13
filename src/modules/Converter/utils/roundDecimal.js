//* Fonction (trop cool) qui me permet d'arrondir un nombre

//* option est un paramètre integer
//* pour indiquer à combien on veut arrondir après la virgule
const roundDecimal = (number, option) => {
  //* c'est soit le paramètre "option", soit 2, donc si rien de renseigné, par défaut 2
  const opt = option || 2;
  //* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
  const precision = Math.pow(10, opt);
  return Math.round(number*precision)/precision;
}

export default roundDecimal;