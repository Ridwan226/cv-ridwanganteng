import React from 'react';
import Head from 'next/head';
import {Hero, Navbar, SectionBlogs, SectionService} from '../components';
function Home() {
  return (
    <div>
      <Head>
        <title>Ridwan Romadhon</title>
      </Head>
      <Navbar />
      <Hero />
      <SectionBlogs />
      <SectionService />
    </div>
  );
}

export default Home;
