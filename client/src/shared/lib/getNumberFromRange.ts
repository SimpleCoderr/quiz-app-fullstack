export const getNumberFromRange = (startNum: number, lastNum: number) => {
  const randomNum = Math.floor(Math.random() * lastNum) + startNum;
  return Math.floor(randomNum); // так получаем целое число
};
