import { checkValueInArray } from "./checkValueInArray";
import { getKeyFromValue } from "./getKeyFromValue";
import { getNumberFromRange } from "./getNumberFromRange";

const indexesArray: number[] = [];

export const getRandomQuestionBlock = (
  countries: object,
  capitals: string[]
) => {
  let randomIndexCapitalsArr: number;
  let isUniqueIndex: boolean = false;

  while (isUniqueIndex === false) {
    // данный цикл ждет новое уникальное значение индекса, чтобы потом вытащить столицу
    isUniqueIndex = true;
    randomIndexCapitalsArr = getNumberFromRange(0, capitals.length);
    if (checkValueInArray(randomIndexCapitalsArr, indexesArray)) {
      isUniqueIndex = false;
    } else {
      indexesArray.push(randomIndexCapitalsArr);
      break;
    }
  }

  const capital = capitals[randomIndexCapitalsArr];
  // достаем название столицы по новому уникальному индексу

  const country: string = getKeyFromValue(countries, capital);
  // достаем название страны по названию столицы

  const indexesCapitalsArray: number[] = [randomIndexCapitalsArr];
  // пока что кладем правильную столицу страны в первое значение, потом мы его зарандомим

  while (indexesCapitalsArray.length < 4 || isUniqueIndex === false) {
    isUniqueIndex = true;
    const newRandomNumber: number = getNumberFromRange(0, capitals.length);
    if (checkValueInArray(newRandomNumber, indexesCapitalsArray)) {
      isUniqueIndex = false;
    } else {
      indexesCapitalsArray.push(newRandomNumber);
      continue;
    }
  }

  const randomIndexOfArray = getNumberFromRange(0, indexesCapitalsArray.length);
  [indexesCapitalsArray[0], indexesCapitalsArray[randomIndexOfArray]] = [
    indexesCapitalsArray[randomIndexOfArray],
    indexesCapitalsArray[0],
  ];
  // рандомим правильному ответу индекс от 0 до 3 и помещаем правильный ответ туда

  const selectedCapitals = indexesCapitalsArray.map(
    (indexOfCapital) => capitals[indexOfCapital]
  ); // формируем массив выбранных столиц по массиву выбранных индексов столиц

  return {
    question: `Столица страны ${country.replace(/_/g, "-")}: `,
    variants: selectedCapitals,
    correct: randomIndexOfArray,
  };
};
