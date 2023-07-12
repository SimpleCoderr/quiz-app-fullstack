export const isDisableNextButton = (
  page: number,
  pageQuantity: number,
  totalCount: number
) => {
  return page * pageQuantity >= totalCount;
};
