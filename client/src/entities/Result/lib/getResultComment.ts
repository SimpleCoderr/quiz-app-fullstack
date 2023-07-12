import {
  COMMENT_FOR_MARK_2,
  COMMENT_FOR_MARK_3,
  COMMENT_FOR_MARK_4,
  COMMENT_FOR_MARK_5,
} from "../const";

export const getResultComment = (rightCount: number, totalCount: number) => {
  const ratio = (rightCount / totalCount) * 100;
  if (ratio < 50) {
    return COMMENT_FOR_MARK_2;
  } else if (ratio < 70) {
    return COMMENT_FOR_MARK_3;
  } else if (ratio < 90) {
    return COMMENT_FOR_MARK_4;
  }
  return COMMENT_FOR_MARK_5;
};
