import { QuestionBlock } from "entities/QuestionBlock";
import { useTypedSelector } from "shared";
import { getRangeIndexCurrentQuestions } from "../lib/getRangeIndexCurrentQuestions";
import s from "./QuestionList.module.scss";

export const QuestionList = () => {
  const { questions, answers, page, pageQuantity, resultsIsShow } =
    useTypedSelector((state) => state.quiz);

  const [startIndex, lastIndex] = getRangeIndexCurrentQuestions(
    page,
    pageQuantity,
    questions.length
  );

  const currentQuestions = questions.slice(startIndex, lastIndex);

  return (
    <div className={s.qustionList}>
      {currentQuestions.map(({ question, variants }, index) => {
        const globalIndexList = startIndex + index; // это индекс вопроса относительно всего списка
        return (
          <QuestionBlock
            key={question}
            index={globalIndexList}
            question={question}
            variants={variants}
            markedVariant={answers[globalIndexList]}
            disabledCheckbox={resultsIsShow}
          />
        );
      })}
    </div>
  );
};
