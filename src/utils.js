function isNumber(value) {
  return !Number.isNaN(value) && typeof value === "number";
}

function isUndefined(value) {
  return typeof value === "undefined";
}

export {
  isNumber,
  isUndefined,
};