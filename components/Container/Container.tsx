import React, { FC } from "react";

import ContainerStyle from "./styleContainer";

const Container : FC = ( {children} ) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
