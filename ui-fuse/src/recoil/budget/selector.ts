import { selector } from "recoil";

import budgetAtom, { BudgetAtomProps } from "./atom";

const budgetSelector = selector<Partial<BudgetAtomProps>>({
  key: "budgetSetHeader",
  get: ({ get }) => get(budgetAtom),
  set: ({ set }, newValue) => {
    set(budgetAtom, newValue);
  },
});

export default budgetSelector;
