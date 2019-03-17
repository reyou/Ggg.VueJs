// Importing Individual Features from a Multifile Module
import { addition as add, multiply, subtract, mean as average } from "./maths";
let values = [10, 20, 30, 40, 50];
console.log(`Add: ${add(values)}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);
console.log(`Average : ${average(values)}`);
