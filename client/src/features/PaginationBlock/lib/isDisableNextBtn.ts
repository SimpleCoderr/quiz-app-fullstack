export const isDisableNextButton = (
  page: number,
  pageQuantity: number, // сколько вопросов должно быть на странице
  totalCount: number
) => {
  return page * pageQuantity >= totalCount;
};
