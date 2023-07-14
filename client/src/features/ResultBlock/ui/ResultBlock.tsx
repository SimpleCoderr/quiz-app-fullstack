import { Space } from "antd";
import { ResultButton } from "entities";
import { Result } from "entities/Result";
import { useAppDispatch, useTypedSelector } from "shared/model";
import { showResultAC } from "../model";
import { getCountRightAnswer } from "../lib/getCountRightAnswer";
import { CountdownTimer } from "entities/CountdownTimer";
import s from "./ResultBlock.module.scss";

export const ResultBlock = () => {
  const { resultsIsShow, answers, questions } = useTypedSelector(
    (state) => state.quiz
  );

  const dispatch = useAppDispatch();

  const showResult = () => {
    dispatch(showResultAC());
  };
  const restartQuiz = () => {
    window.location.reload(); // перезагружаем, чтобы тест оказался с новыми вопросами
    // dispatch(restartQuizAC());
  };

  const correctAnswers = questions.map((question) => question.correct);
  return (
    <div className={s.resultBlock}>
      {resultsIsShow ? (
        <Result
          countRightAnswer={getCountRightAnswer(correctAnswers, answers)}
          totalCountAnswer={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Space align="center">
          <ResultButton onClick={showResult} />
          <CountdownTimer numberMinutes={10} onFinish={showResult} />
        </Space>
      )}
    </div>
  );
};
