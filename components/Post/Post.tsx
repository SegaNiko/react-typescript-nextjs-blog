/* eslint-disable react/display-name */
import { FC, forwardRef } from 'react';
import { useRouter } from 'next/router';

import PostStyle from './stylePost';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Button from '../Button/Button';
import { blogAPI } from '../../api/api';

export interface PostProps {
  href?: string;
  isSingle?: boolean;
  title: string;
  body: string;
  id?: string;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

const Post: FC<PostProps> = forwardRef(({ href, onClick, isSingle, title, body, id }, ref) => {
  const router = useRouter();

  const handleClickDelete = (e: Event) => {
    e.preventDefault();
    blogAPI.deletePost(id).finally(() => router.push('/'));
  };
  console.log('DELETE POST ID', id);

  return (
    <PostStyle ref={ref} href={href} isSingle={isSingle} onClick={onClick}>
      <Title title={title}></Title>
      <Text text={body}></Text>
      {isSingle && <Button onClick={handleClickDelete}>Delete Post</Button>}
    </PostStyle>
  );
});

export default Post;
