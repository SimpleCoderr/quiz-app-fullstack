import { capitalsOfEurope, country } from "shared/const";
import { IQuestionBlock } from "./../types/IQuestionBlock";
import { getRandomQuestionBlock } from "./getRandomQuestionBlock";

export const getQuestionsList = (questionsCount: number) => {
  let questions: IQuestionBlock[] = [];

  for (let i = 1; i <= questionsCount; i++) {
    questions.push(getRandomQuestionBlock(country, capitalsOfEurope));
  }

  return questions
};
