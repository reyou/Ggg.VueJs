import additionFunction from "./maths/sum";
import { multiply, subtract as minus } from "./maths/operations";
let values = [10, 20, 30, 40, 50];
console.log(`Sum: ${additionFunction(values)}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${minus(1000, values)}`);
