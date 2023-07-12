// метод возвращает индексы тех вопросов, которые должны отображаться в настоящее время, не включая последний индекс
export const getRangeIndexCurrentQuestions = (
  page: number,
  pageQuantity: number,
  totalCount: number
) => {
  const startIndex = (page - 1) * pageQuantity;
  const lastIndex = startIndex + pageQuantity;
  return page * pageQuantity > totalCount
    ? [startIndex, totalCount] // если это последние вопросы, то lastIndex - это последний индекс вопроса в списке
    : [startIndex, lastIndex];
};
