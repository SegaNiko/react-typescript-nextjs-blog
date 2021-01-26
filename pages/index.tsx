import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { siteTitle } from '../consts/siteTitle';
import { fetchPosts } from '../store/actions';
import { PostType } from '../store/types';

import Link from 'next/link';
import Layout from '../components/layout';
import Title from '../components/Title/Title';
import Container from '../components/Container/Container';
import BlogWrap from '../components/BlogWrap/BlogWrap';
import Post from '../components/Post/Post';

const Home: FC = () => {
  const { posts, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Layout>
      <section>
        <Container>
          <Title title={siteTitle}></Title>
        </Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <BlogWrap>
            {posts.map((item: PostType) => (
              <Link key={item.id} href={`/posts/${item.id}`} passHref>
                <Post title={item.title} body={item.body} />
              </Link>
            ))}
          </BlogWrap>
        )}
      </section>
    </Layout>
  );
};

export default Home;
