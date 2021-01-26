import React, { ChangeEvent, FC } from 'react';

import TextareaStyle from './styledTextarea';

interface propsTextarea {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Textarea: FC<propsTextarea> = ({ type, placeholder, onChange, value }) => {
  return <TextareaStyle type={type} placeholder={placeholder} onChange={onChange} vlaue={value} />;
};
export default Textarea;
