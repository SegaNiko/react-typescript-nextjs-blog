import React, { ChangeEvent, FC } from 'react';

import InputStyle from './styleInput';

export interface InputProps {
    placeholder: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ placeholder, onChange, value }) => {
  return <InputStyle placeholder={placeholder} onChange={onChange} value={value} />;
};

export default Input;
