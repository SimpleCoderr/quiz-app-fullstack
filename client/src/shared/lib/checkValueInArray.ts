export const checkValueInArray = (
  value: string | number,
  array: (string | number)[]
) => {
  return array.includes(value);
};
