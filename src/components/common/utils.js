export function convertFahrToCels(val) {
  return Math.round((val - 32) * 5 / 9);
}

export function getTempDisplayStr(val) {
  return `${convertFahrToCels(val)}\u{2103} | ${val}\u{2109}`;
}
