// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
let myData = {
  name: "Adam",
  weather: "sunny",
  printMessages() {
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  }
};
let secondObject = {};
Object.assign(secondObject, myData);
secondObject.printMessages();
