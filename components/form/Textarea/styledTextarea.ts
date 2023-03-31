import styled from 'styled-components';
import { ChangeEvent } from 'react';

interface TextareaProps {
  type: string;
  placeholder: string;
  rows?: string;
  cols?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextareaStyle = styled.textarea.attrs((props: TextareaProps) => ({
  type: props.type,
  placeholder: props.placeholder,
  rows: '15',
  cols: '45',
  onChange: props.onChange,
}))`
  width: 50%;
  margin: 10px 0;
  border: 2px solid black;
  border-radius: 2px;
  resize: none;
  color: black;
  padding: 5px 10px;
  outline: none;

  ::placeholder {
    color: black;
  }
  :focus {
    border: 2px solid #eee;
  }
`;

export default TextareaStyle;
