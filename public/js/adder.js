/**
 *  Adder takes two arrays as arguments. Those arrays contains arrays
 *    which have a structure in which each item has a specific
 *    meaning:
 *
 *  ex:
 *   2x^2 + 3 = [ [2, 2], [3] ]
 *   3x^3 + x^2 = [ [3,3], [1,2] ]
 *
 * The return value is an array of same structure as arguments.
 *
 * @param {array[]} expressionOne - as described above
 * @param {array[]} expressionTwo - as described above
 */

const adder = (expressionOne, expressionTwo) => {
  let inputTerms = expressionOne.concat(expressionTwo);
  let resultExpression = [];
  let highestDegree = 0;

  for (let i = 0, len = inputTerms.length; i < len; i++) {
    const inputTermsItem = inputTerms[i];
    let sumOfConstants = null;
    let nullConstantsIndex = null;
    let sameExponentFound = false;

    for (let j = 0, length = resultExpression.length; j < length; j++) {
      const resultExpressionItem = resultExpression[j];

      if (resultExpressionItem[1] === inputTermsItem[1]) {
        sumOfConstants = resultExpressionItem[0] + inputTermsItem[0];

        if (sumOfConstants !== 0) {
          resultExpressionItem[0] = sumOfConstants;
        } else {
          nullConstantsIndex = j;
        }
        sameExponentFound = true;
      }
    }

    if (sameExponentFound) {
      if (nullConstantsIndex !== null) {
        resultExpression.splice(nullConstantsIndex, 1);
      }
    } else {
      const newResultTerm = inputTerms[i];

      if (newResultTerm[1] > highestDegree) {
        highestDegree = newResultTerm[1];
        resultExpression.unshift(newResultTerm);
      } else {
        resultExpression.push(newResultTerm);
      }
    }
  }

  return resultExpression;
};

export { adder };
