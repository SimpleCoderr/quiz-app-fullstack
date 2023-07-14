export const getKeyFromValue = (array: [], value: string) => {
  return Object.keys(array).find((key: any) => array[key] === value);
};
