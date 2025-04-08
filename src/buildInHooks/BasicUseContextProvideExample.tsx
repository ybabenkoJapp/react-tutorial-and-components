import * as React from "react";
import { createContext } from "react";

export const MyContext = createContext({
  value: "My test value",
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
});
