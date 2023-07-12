import { CHANGE_VARIANT } from "entities/QuestionBlock";
import { PAGE_BACK, PAGE_FORWARD } from "features/PaginationBlock";
import { QUIZ_RESTART, RESULT_SHOW } from "features/ResultBlock";
import { QuizAction } from "../actionTypes/QuizActionTypes";
import { quizInitialState } from "../initStates/quizInitState";

export const quizReducer = (
  state = quizInitialState,
  action: QuizAction
): typeof quizInitialState => {
  switch (action.type) {
    case CHANGE_VARIANT:
      return {
        ...state,
        answers: [
          ...state.answers.slice(0, action.payload.questionIndex),
          action.payload.variantIndex,
          ...state.answers.slice(action.payload.questionIndex + 1),
        ],
      };
    case PAGE_FORWARD:
      return { ...state, page: state.page + 1 };
    case PAGE_BACK:
      return { ...state, page: state.page - 1 };
    case RESULT_SHOW:
      return { ...state, resultsIsShow: true };
    case QUIZ_RESTART:
      return {...quizInitialState, answers: new Array(state.questions.length)};
    default:
      return { ...state, answers: new Array(state.questions.length) };
    // чтобы в дальнейшем отслеживать ответы на вопросы, нужно иметь массив, размер которого равен количеству вопросов
    // default выполнится лишь однажды - при первом проходе по редьюсеру, в момент инициализации state
  }
};
