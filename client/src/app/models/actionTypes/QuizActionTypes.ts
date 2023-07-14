import { CHANGE_VARIANT } from "entities/QuestionBlock";
import { PAGE_BACK, PAGE_FORWARD } from "features/PaginationBlock";
import { QUIZ_RESTART, RESULT_SHOW } from "features/ResultBlock";

type ChangeVariantAction = {
  type: typeof CHANGE_VARIANT;
  payload: {
    questionIndex: number;
    variantIndex: number;
  };
};
type increasePageAction = {
  type: typeof PAGE_FORWARD;
};

type decreasePageAction = {
  type: typeof PAGE_BACK;
};
type showResultAction = {
  type: typeof RESULT_SHOW;
};
type resetQuizAction = {
  type: typeof QUIZ_RESTART;
};

export type QuizAction =
  | ChangeVariantAction
  | increasePageAction
  | decreasePageAction
  | showResultAction
  | resetQuizAction;
