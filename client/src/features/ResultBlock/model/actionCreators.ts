import { QUIZ_RESTART, RESULT_SHOW } from "./types";

export const showResultAC = () => ({ type: RESULT_SHOW });
export const restartQuizAC = () => ({ type: QUIZ_RESTART });
