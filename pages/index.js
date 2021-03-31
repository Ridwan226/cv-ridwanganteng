import React from 'react';
import Head from 'next/head';
import {Hero, Navbar, SectionBlogs} from '../components';
function Home() {
  return (
    <div>
      <Head>
        <title>Ridwan Romadhon</title>
      </Head>
      <Navbar />
      <Hero />
      <SectionBlogs />
    </div>
  );
}

export default Home;
