import styled from 'styled-components';
import { PropsButton } from './Button';

const ButtonStyle = styled.button.attrs((props: PropsButton) => ({
  onClick: props.onClick,
}))`
    width: 100%;
    max-width: 150px;
    border: 2px solid transparent;
    border-bottom: 2px solid black;
    border-radius: 2px;
    outline: 0;
    font-size: 1.3rem;
    color: balck;
    padding: 5px 10px;
    cursor: pointer;

    :focus {
        border-bottom: 2px solid whitesmoke;
    }
`;

export default ButtonStyle;
