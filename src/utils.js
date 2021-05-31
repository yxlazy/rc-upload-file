function isNumber(num) {
  return !Number.isNaN(num) && typeof num === "number";
}

export {
  isNumber,
};