import { PAGE_BACK, PAGE_FORWARD } from "./types";

export const increasePageAC = () => ({type: PAGE_FORWARD})
export const derceasePageAC = () => ({type: PAGE_BACK})