export const sum = (arr, cb?) => {
  if (cb) return sum(arr.map(cb));
  return arr.reduce((prev, current) => prev + current);
};
