import { IQuestionBlock } from "shared/types";
import { getQuestionsList } from "shared/lib";

type QuizState = {
  questions: IQuestionBlock[];
  page: number;
  pageQuantity: number;
  answers: (number | undefined)[];
  resultsIsShow: boolean;
};

export const quizInitialState: QuizState = {
  questions: getQuestionsList(10),
  page: 1,
  pageQuantity: 5,
  resultsIsShow: false,
  answers: [],
};
