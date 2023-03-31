import React, { FC } from 'react';

import TitleStyle from './styleTitle';

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return <TitleStyle>{title}</TitleStyle>;
};
export default Title;
