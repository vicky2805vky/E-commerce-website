export const addCommaToNumber = (number) => {
  number = "" + number;
  let numberWithComma = "";
  for (let i = number.length; i > 0; i--) {
    numberWithComma = number[i - 1] + numberWithComma;
    if (numberWithComma.length % 3 === 0 && i !== 1) {
      numberWithComma = "," + numberWithComma;
    }
  }
  return numberWithComma;
};
