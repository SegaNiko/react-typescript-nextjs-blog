import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { PostType } from '../../store/types';

import Layout from '../../components/layout';
import Post from '../../components/Post/Post';
import BlogWrap from '../../components/BlogWrap/BlogWrap';

const PostPage: FC = () => {
  const { posts } = useSelector(state => state);
  const route = useRouter();
  const post = posts.filter((item: PostType) => item.id == route.query.id)[0];

  return (
    <Layout>
      <BlogWrap>
        <Post isSingle={true} title={post.title} body={post.body} id={post.id}></Post>
      </BlogWrap>
    </Layout>
  );
};

export default PostPage;
