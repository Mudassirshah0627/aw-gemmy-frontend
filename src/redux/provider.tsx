"use client";

import { Provider } from "react-redux";
import Store from "./store";

const RTKProvider = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default RTKProvider;
