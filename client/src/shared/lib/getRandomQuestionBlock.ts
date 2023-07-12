import { checkValueInArray } from "./checkValueInArray";
import { getKeyForValue } from "./getKeyFromValue";
import { getNumberFromRange } from "./getNumberFromRange";

const indexesArray: number[] = [];

export const getRandomQuestionBlock = (
  countriesObj: any,
  capitals: string[]
) => {
  let randomNumber: number;

  let isUniqueIndex: boolean = false;

  while (isUniqueIndex === false) {
    // данный цикл ждет новое уникальное значение индекса, чтобы потом вытащить столицу
    isUniqueIndex = true;
    randomNumber = getNumberFromRange(0, capitals.length);
    if (checkValueInArray(randomNumber, indexesArray)) {
      isUniqueIndex = false;
    } else {
      indexesArray.push(randomNumber);
      break;
    }
  }

  const capital = capitals[randomNumber]; // достаем название столицы по новому уникальному индексу

  const country: string = getKeyForValue(countriesObj, capital); // достаем название страны по названию столицы

  const capitalsArray: number[] = [randomNumber]; // пока что кладем правильную столицу страны в первое значение, потом мы его зарандомим

  isUniqueIndex = false;

  while (capitalsArray.length < 4 || isUniqueIndex === false) {
    isUniqueIndex = true;
    const newRandomNumber: number = getNumberFromRange(0, capitals.length);
    if (checkValueInArray(newRandomNumber, capitalsArray)) {
      isUniqueIndex = false;
    } else {
      capitalsArray.push(newRandomNumber);
      continue;
    }
  }

  const randomIndexOfArray = getNumberFromRange(0, 3);
  [capitalsArray[0], capitalsArray[randomIndexOfArray]] = [
    capitalsArray[randomIndexOfArray],
    capitalsArray[0],
  ];
  // рандомим правильному ответу индекс от 0 до 3 и помещаем правильный ответ туда

  return {
    question: `Столица страны ${country.replace(/_/g, "-")}: `,
    variants: capitalsArray.map((indexOfCapital) => capitals[indexOfCapital]),
    correct: randomIndexOfArray,
  };
};
