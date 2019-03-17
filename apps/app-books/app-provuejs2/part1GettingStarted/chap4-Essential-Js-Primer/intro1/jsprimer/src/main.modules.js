import additionFunction from "./math/sum";
import { multiply, subtract } from "./maths/operations";
let values = [10, 20, 30, 40, 50];
let total = additionFunction(values);
console.log(`Total: ${total}`);
console.log(`Sum: ${additionFunction(values)}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);
