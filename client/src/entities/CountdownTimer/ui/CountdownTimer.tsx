import { Statistic } from "antd";
import type { CountdownProps } from "antd";
import s from "./CountdownTimer.module.scss";
import { useMemo, useState } from "react";

type CountdownTimerProps = {
  numberMinutes: number;
  onFinish: () => void;
};

const { Countdown } = Statistic;

const CountdownTimer = ({
  numberMinutes,
  onFinish: handleFinish,
}: CountdownTimerProps) => {
  const [dangerousTime, setDangerousTime] = useState(false);

  const baseColor = dangerousTime ? "red" : "grey";
  // когда остается менее 10% времени от исходного - цвет таймера делаем красным, дефолтный цвет - серый

  const msFromTotalMinutes = 1000 * 60 * numberMinutes;

  const deadline = useMemo(() => Date.now() + msFromTotalMinutes, [numberMinutes]);

  const onFinish: CountdownProps["onFinish"] = () => {
    handleFinish();
  };

  const onChange: CountdownProps["onChange"] = (val) => {
    const time: number = 0.1 * msFromTotalMinutes;
    if (typeof val === "number" && val <= time) {
      // когда остается, 10 процентов от первоначального времени, мы это помечаем
      setDangerousTime(true);
    }
  };

  return (
    <div className={s.timer} style={{ borderColor: baseColor }}>
      <Countdown
        value={deadline}
        valueStyle={{ color: baseColor }}
        onChange={onChange}
        onFinish={onFinish}
        format="mm:ss"
      />
    </div>
  );
};

export default CountdownTimer;
