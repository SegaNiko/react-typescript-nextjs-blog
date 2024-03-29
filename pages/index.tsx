import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { siteTitle } from '../consts/siteTitle';
import { fetchPosts } from '../store/actions';
import { PostType } from '../store/types';

import Link from 'next/link';
import Layout from '../components/common/Layout/layout';
import Container from '../components/ui-kit/Container/Container';
import BlogWrap from '../components/common/BlogWrap/BlogWrap';
import Title from '../components/ui-kit/Title/Title';
import Post from '../components/common/Post/Post';
import Spinner from '../components/common/Spinner/styledSpinner';

const Home: FC = () => {
  const { posts, isLoading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Container>
            <Title title={siteTitle}></Title>
          </Container>
          <BlogWrap>
            {posts.map((item: PostType) => (
              <Link key={item.id} href={`/posts/${item.id}`} passHref>
                <Post title={item.title} body={item.body} />
              </Link>
            ))}
          </BlogWrap>
        </>
      )}
    </Layout>
  );
};

export default Home;
