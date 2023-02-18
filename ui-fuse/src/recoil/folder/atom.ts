import { atom } from "recoil";

const menuAtom = atom({
  key: "menuAtom",
  default: {
    isDrawerOpen: true,
    itemIsOpen: [],
  },
});

export default menuAtom;
