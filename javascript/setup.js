function convertSingleMinutes(time) {
  const results = ["0000", "Y000", "YY00"];
  return results[isDivisibleBy5(time)];
}

function isDivisibleBy5(mins) {
  return mins % 5;
}
