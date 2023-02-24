import { atom } from "recoil";
import { ActivityToAdd } from "../../types/Composition.type";

export type BudgetAtomProps = {
  id: string;
  name: string;
  description: string;
  total: number;
  date: string;
  activities: Array<ActivityToAdd>;
};

const budgetAtom = atom<Partial<BudgetAtomProps>>({
  key: "budgetAtom",
  default: {
    id: "",
    name: "",
    description: "",
    total: 0,
    activities: [],
    date: "",
  },
});

export default budgetAtom;
