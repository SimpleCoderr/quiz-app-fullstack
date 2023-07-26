import { ArrowDownOutlined } from "@ant-design/icons";
import s from "./TestingHeader.module.scss";

const TestingHeader = () => {
  return (
    <header className={s.headerTesting}>
      <div>
        Пройдите тест на знание столиц стран Европы и узнайте свой результат!
      </div>
      <ArrowDownOutlined />
    </header>
  );
};

export default TestingHeader;
