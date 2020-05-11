/**
 *  Adder takes two arrays as arguments. Those arrays contains arrays
 *    which have a structure in which each item has a specific
 *    meaning:
 *
 *    constrain - number
 *    exponential - number
 *    term - [ constrain, exponential ]
 *    expression - [ term, ... ]
 *
 *  ex:
 *   2x^2 + 3 = [ [2, 2], [3] ]
 *   3x^3 + x^2 = [ [3,3], [1,2] ]
 *
 * The return value is an array of same structure as arguments.
 *
 * @param {array[]} expressionOne - as described above
 * @param {array[]} expressionTwo - as described above
 *
 * @return {object[]} - each key is Exponential (and c when term without Variable - constant term) and value is Constant
 */

export const expressionAdder = (expressionOne, expressionTwo) => {
  let inputTerms = expressionOne.concat(expressionTwo),
    resultExpression = {},
    length = inputTerms.length;

  while (length--) {
    const [
      inputTermsItemConstant,
      inputTermsItemExponential = "c",
    ] = inputTerms[length];
    const addedValue =
      (resultExpression[inputTermsItemExponential] || 0) +
      (inputTermsItemConstant || 0);

    if (addedValue) {
      resultExpression[inputTermsItemExponential] = addedValue;
    } else {
      delete resultExpression[inputTermsItemExponential];
    }
  }

  return resultExpression;
};
