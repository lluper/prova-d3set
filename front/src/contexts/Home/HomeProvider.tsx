import { useState } from "react";
import HomeContext from "./HomeContext";

export function HomeProvider(props: any) {
  const [isOnlyMoreTwo, setIsOnlyMoreTwo] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        isOnlyMoreTwo,
        setIsOnlyMoreTwo,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}
