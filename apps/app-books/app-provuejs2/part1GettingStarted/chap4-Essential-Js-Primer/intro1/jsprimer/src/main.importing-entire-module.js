import additionFunction from "./maths/sum";
import * as ops from "./maths/operations";
let values = [10, 20, 30, 40, 50];
console.log(`Sum: ${additionFunction(values)}`);
console.log(`Multiply: ${ops.multiply(values)}`);
console.log(`Subtract: ${ops.subtract(1000, values)}`);
