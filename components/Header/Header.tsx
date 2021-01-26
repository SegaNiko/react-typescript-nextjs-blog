import React, { FC } from "react";

import HeaderStyle from "./styleHeader";

const Header:FC = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};
export default Header;
