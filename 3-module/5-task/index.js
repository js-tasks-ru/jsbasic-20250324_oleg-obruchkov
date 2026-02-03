function getMinMax(str) {
  let array = str
    .split(" ")
    .filter((item) => Number.isFinite(Number(item)))
    .map((item) => Number(item));

  return { min: Math.min(...array), max: Math.max(...array) };
}
