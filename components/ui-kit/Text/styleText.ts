import styled from 'styled-components';

const TextStyle = styled.p`
  margin: 0 1rem;
  font-size: 20px;
  text-align: initial;
  width: 90%;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  :focus {
    border-bottom: 2px solid whitesmoke;
  }
`;

export default TextStyle;
