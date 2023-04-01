import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { siteTitle } from '../../../consts/siteTitle';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='' />
        <title>{siteTitle}</title>
      </Head>

      <Header>
        <Link href='/'>Home</Link>
        <Link href='/posts/new'>Create new post</Link>
      </Header>
      <main>{children}</main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </>
  );
};

export default Layout;
