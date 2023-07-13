import { PaginationButton } from "entities";
import { isDisableNextButton } from "../lib/isDisableNextBtn";
import { useAppDispatch, useTypedSelector } from "shared/model";
import { derceasePageAC, increasePageAC } from "../model";
import s from "./PaginationBlock.module.scss";

export const PaginationBlock = () => {
  const { page, pageQuantity, questions } = useTypedSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();

  const decreasePage = () => {
    dispatch(derceasePageAC());
  };
  const increasePage = () => {
    dispatch(increasePageAC());
  };

  return (
    <div className={s.paginationBlock}>
      <PaginationButton onClick={decreasePage} disabled={page === 1}>
        назад
      </PaginationButton>
      <PaginationButton
        onClick={increasePage}
        disabled={isDisableNextButton(page, pageQuantity, questions.length)}
      >
        вперед
      </PaginationButton>
    </div>
  );
};
