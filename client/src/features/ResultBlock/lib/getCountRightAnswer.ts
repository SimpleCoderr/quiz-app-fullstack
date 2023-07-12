export const getCountRightAnswer = (
  correctAnwers: number[],
  answers: (number | undefined)[]
) => {
  return correctAnwers.reduce(
    (accum, currentValue, index) =>
      currentValue === answers[index] ? accum + 1 : accum,
    0
  );
};
