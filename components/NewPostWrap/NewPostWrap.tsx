import React, { FC } from "react";

import NewPostWrapStyle from "./styleNewPostWrap";

const NewPostWrap : FC = ({ children }) => {
  return <NewPostWrapStyle>{children}</NewPostWrapStyle>
};

export default NewPostWrap;