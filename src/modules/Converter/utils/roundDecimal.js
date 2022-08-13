const roundDecimal = (number, option) => {
  const precision = option || 2;
  const tmp = Math.pow(10, precision);
  return Math.round(number*tmp)/tmp;
}

export default roundDecimal;