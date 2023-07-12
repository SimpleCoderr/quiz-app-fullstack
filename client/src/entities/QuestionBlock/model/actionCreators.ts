import { CHANGE_VARIANT } from "./types";

export const changeVariantAC = (
  questionIndex: number,
  variantIndex: number
) => ({ type: CHANGE_VARIANT, payload: { questionIndex, variantIndex } });
