const convertToDecimal = (arr) => {
  let binaryArray = [];
  let copiedArray = [...arr];

  while (copiedArray.length !== 0) {
    binaryArray.push(Number(copiedArray.pop()));
  }

  let totalDecimalNumber = null;
  for (let i = 0; i < binaryArray.length; i++) {
    const decimalNumber = binaryArray[i];
    if (decimalNumber === 1) {
      totalDecimalNumber += Math.pow(2, i);
      console.warn("waht is the value her------", totalDecimalNumber);
    } else if (decimalNumber !== 0) {
      totalDecimalNumber = "this is not a valid number";
      break;
    }
  }
  return totalDecimalNumber;
};

export default convertToDecimal;

//const results = convertToDecimal([1, 1, 0, 0, 1, 1]);
//console.warn("what is results==========", results);
