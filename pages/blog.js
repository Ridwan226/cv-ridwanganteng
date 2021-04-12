import Head from 'next/head';
import {HeroBlog, Navbar} from '../components';

export default function blog() {
  return (
    <div>
      <Head>
        <title>Blog | Ridwan Romadhon</title>
      </Head>
      <Navbar />
      <HeroBlog />
    </div>
  );
}
