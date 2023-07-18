 export const checkValueInArray = <T>(
  value: T,
  array: T[]
) => {
  return array.includes(value);
};