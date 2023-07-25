import { QuestionList } from "features/QuestionList";
import { PaginationBlock } from "features/PaginationBlock";
import { ResultBlock } from "features/ResultBlock";
import { useAppDispatch, useTypedSelector } from "shared/model";
import { CountdownTimer } from "entities/CountdownTimer";
import { showResultAC } from "features/ResultBlock/model";
import s from "./Quiz.module.scss"

export const Quiz = () => {

  const {resultsIsShow} = useTypedSelector(state => state.quiz)

  const dispatch = useAppDispatch();

  const showResult = () => {
    dispatch(showResultAC());
  };
  
  return (
    <div className={s.quiz}>
      <QuestionList/>
      <PaginationBlock/>
      <ResultBlock/>
      {!resultsIsShow && <CountdownTimer numberMinutes={10} onFinish={showResult} />}
    </div>
  );
};
