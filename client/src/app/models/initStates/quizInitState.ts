import { IQuestionBlock } from "shared/types";
import { capitalsOfEurope, country } from "shared/const";
import { getRandomQuestionBlock } from "shared/lib";

type QuizState = {
  questions: IQuestionBlock[];
  page: number;
  pageQuantity: number;
  answers: (number | undefined)[];
  resultsIsShow: boolean;
};

const questions: IQuestionBlock[] = [];

for (let i = 0; i < 10; i++) {
  questions.push(getRandomQuestionBlock(country, capitalsOfEurope));
}

export const quizInitialState: QuizState = {
  questions,
  page: 1,
  pageQuantity: 5,
  resultsIsShow: false,
  answers: [],
};
