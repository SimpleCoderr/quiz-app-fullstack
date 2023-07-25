export const getKeyFromValue = <T extends {}>(obj: T, value: string) => {
  return Object.keys(obj).find((key) => obj[key as keyof T] === value);
};