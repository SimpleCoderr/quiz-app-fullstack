export type questionBlock = {
  question: string;
  variants: string[];
  correct: number; // будет хранить в себе индекс правильного ответа из массива выше
};
