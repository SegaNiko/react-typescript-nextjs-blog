import React, { FC } from 'react';

import FooterStyle from './styleFooter';

const Footer: FC = ({ children }) => {
  return <FooterStyle>{children}</FooterStyle>;
};
export default Footer;
