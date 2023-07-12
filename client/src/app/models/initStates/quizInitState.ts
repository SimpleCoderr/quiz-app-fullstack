import { questionBlock } from "shared";
import { capitalsOfEurope } from "shared/const/capitalsOfEuropeArray";
import { country } from "shared/const/countryAndCaptalObject";
import { getRandomQuestionBlock } from "shared/lib/getRandomQuestionBlock";

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
