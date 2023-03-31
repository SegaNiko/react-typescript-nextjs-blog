import styled from 'styled-components';
import { InputProps } from './Input';

const InputStyle = styled.input.attrs((props: InputProps) => ({
  type: 'text',
  placeholder: props.placeholder,
  onChange: props.onChange,
}))`
  width: 50%;
  border: 2px solid transparent;
  border-bottom: 2px solid black;
  outline: 0;
  font-size: 1.3rem;
  border-radius: 2px;
  color: balck;
  padding: 5px 10px;

  ::placeholder {
    color: black;
  }

  :focus {
    border-bottom: 2px solid whitesmoke;
  }
`;

export default InputStyle;
