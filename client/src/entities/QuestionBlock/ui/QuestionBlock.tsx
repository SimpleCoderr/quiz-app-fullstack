import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { MyCheckbox } from "shared/ui";
import { useAppDispatch } from "shared/model";
import { changeVariantAC } from "../model";
import s from "./QuestionBlock.module.scss";

type QuestionBlockProps = {
  index: number;
  question: string;
  variants: string[];
  markedVariant: number | undefined;
  disabledCheckbox: boolean;
};
export const QuestionBlock = ({
  question,
  variants,
  index,
  markedVariant,
  disabledCheckbox,
}: QuestionBlockProps) => {
  const numberQuestion = index + 1;

  const dispatch = useAppDispatch();

  const handleChange = (checkedValue: CheckboxValueType[]) => {
    // checkedValue - массив выбранных значений
    const clickedValue = checkedValue[checkedValue.length - 1];
    // берем последний элемент массива, т.к. нам нужно отметить только его(только один вариант ответа должен быть отмеченным)
    dispatch(changeVariantAC(index, clickedValue as number));
  };
  return (
    <div className={s.questionBlock}>
      <h5 className={s.question}>
        {numberQuestion}) {question}
      </h5>
      <Checkbox.Group
        className={s.checkboxGroup}
        onChange={handleChange}
        value={[markedVariant]}
      >
        {variants.map((variant, index) => (
          <MyCheckbox
            disabled={disabledCheckbox}
            value={index}
            key={variant}
            style={{ fontSize: "16px" }}
          >
            {variant}
          </MyCheckbox>
        ))}
      </Checkbox.Group>
    </div>
  );
};
