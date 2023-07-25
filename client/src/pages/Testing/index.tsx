import { Quiz } from "widgets/Quiz";
import TestingHeader from "./ui/TestingHeader/TestingHeader";
import s from "./styles.module.scss";

export const Testing = () => {
  return (
    <div className={s.testing}>
      <TestingHeader/>
      <Quiz />
    </div>
  );
};
