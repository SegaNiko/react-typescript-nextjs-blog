import React, { FC } from "react";

import TextStyle from "./styleText";

interface TextProp {
  text: string
}

const Text : FC<TextProp>  = ( {text} ) => {
  return <TextStyle>{text}</TextStyle>;
};
export default Text;
