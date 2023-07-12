import { useMemo } from "react";
import { UndoOutlined } from "@ant-design/icons";
import { getResultComment } from "../lib/getResultComment";
import { MyButton } from "shared";
import s from "./Result.module.scss";
import ResultInfo from "./result-info/ResultInfo";

type ResultProps = {
  countRightAnswer: number;
  totalCountAnswer: number;
  restartQuiz: () => void;
};
export const Result = ({
  countRightAnswer,
  totalCountAnswer,
  restartQuiz,
}: ResultProps) => {
  const resultComment = useMemo(
    () => getResultComment(countRightAnswer, totalCountAnswer),
    [countRightAnswer, totalCountAnswer]
  );

  return (
    <div className={s.resultBlock}>
      <ResultInfo countRightAnswer={countRightAnswer} totalCountAnswer={totalCountAnswer}/>
      <div className={s.resultComment}>{resultComment}</div>
      <MyButton
        style={{ fontSize: "28px" }}
        type="link"
        onClick={restartQuiz}
        icon={<UndoOutlined />}
      >
        Пройти тест еще раз
      </MyButton>
    </div>
  );
};
