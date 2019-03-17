// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
export default function(values) {
  return values.reduce((total, val) => total + val, 0);
}
