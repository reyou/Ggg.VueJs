const myFunc = nameFunction => "Hello " + nameFunction() + ".";
const printName = (nameFunction, printFunction) =>
  printFunction(myFunc(nameFunction));
printName(function() {
  return "Adam";
}, console.log);
