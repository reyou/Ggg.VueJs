// Using a JavaScript Promise
import { asyncAdd } from "./maths";
let values = [10, 20, 30, 40, 50];
asyncAdd(values).then(total => console.log(`Main Total: ${total}`));
