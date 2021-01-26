import styled from 'styled-components';

export interface PostStyleProps {
    isSingle: boolean;
    href: string;
    ref: { current: string };
    onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

const PostStyle = styled.a.attrs((props: PostStyleProps) => ({
  isSingle: props.isSingle,
  href: props.href,
  ref: props.ref,
  onClick: props.onClick,
}))`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: auto;
    margin: 1rem;
    width: ${(props) => (props.isSingle ? '700px' : '500px')};
    cursor: pointer;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

export default PostStyle;
