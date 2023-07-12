import { Quiz } from "widgets/Quiz";
import s from "./styles.module.scss";
import { ArrowDownOutlined } from "@ant-design/icons";

export const Testing = () => {
  return (
    <div className={s.testing}>
      <header className={s.headerTesting}>
        <div>Пройдите тест на знание столиц стран Европы и узнайте свой результат!</div>
        <ArrowDownOutlined />
      </header>
      <Quiz />
    </div>
  );
};
