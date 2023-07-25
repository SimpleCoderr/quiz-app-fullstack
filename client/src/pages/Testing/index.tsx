import { ArrowDownOutlined } from "@ant-design/icons";
import { Quiz } from "widgets/Quiz";
import s from "./styles.module.scss";
import TestingHeader from "./ui/TestingHeader/TestingHeader";

export const Testing = () => {
  return (
    <div className={s.testing}>
      <TestingHeader/>
      <Quiz />
    </div>
  );
};
