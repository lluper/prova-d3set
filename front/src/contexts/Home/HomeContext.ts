import { createContext } from "react";

const HomeContext = createContext({
  isOnlyMoreTwo: false,
  setIsOnlyMoreTwo: (value: boolean): void => {},
});

export default HomeContext;
