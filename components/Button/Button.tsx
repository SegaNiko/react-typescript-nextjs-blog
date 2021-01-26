import React, { FC } from 'react';

import ButtonStyle from './styledButton';

export interface PropsButton {
    onClick: (e: Event) => void;
    disabled?: boolean;
}

const Button: FC<PropsButton> = ({ children, onClick, disabled }) => {
  return (
    <ButtonStyle onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};
export default Button;
