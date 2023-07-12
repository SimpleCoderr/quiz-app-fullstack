import { QuestionList } from "features/QuestionList";
import { PaginationBlock } from "features/PaginationBlock";
import { ResultBlock } from "features/ResultBlock";
import s from "./Quiz.module.scss"

export const Quiz = () => {
  
  return (
    <div className={s.quiz}>
      <QuestionList/>
      <PaginationBlock/>
      <ResultBlock/>
    </div>
  );
};
