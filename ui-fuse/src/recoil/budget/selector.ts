import { selector } from "recoil";

import budgetAtom, { BudgetAtomProps } from "./atom";

export const budgetSelector = selector<Partial<BudgetAtomProps>>({
  key: "budgetSetHeader",
  get: ({ get }) => get(budgetAtom),
  set: ({ set }, newValue) => {
    set(budgetAtom, newValue);
  },
});

export const budgetTotalSelector = selector({
  key: "budgetTotal",
  get: ({ get }) => {
    const budget = get(budgetAtom);
    return budget.activities?.reduce((accumulator, current) => accumulator + current.subtotal, 0);
  },
});
