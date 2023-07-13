import { questionBlock } from "shared/types";
import { capitalsOfEurope, country } from "shared/const";
import { getRandomQuestionBlock } from "shared/lib";

type QuizState = {
  questions: questionBlock[];
  page: number;
  pageQuantity: number;
  answers: (number | undefined)[];
  resultsIsShow: boolean;
};

const questions: questionBlock[] = [];

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
