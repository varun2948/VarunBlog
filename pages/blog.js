import Head from 'next/head';
import Link from 'next/link';
import ContentfulApi from '../utils/ContentfulApi';

export default function Blog(props) {
    console.log(props.blogPosts,"blogPosts");
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Blog</h1>
        <nav>
          <p>Nav</p>
          <Link href="/">Home</Link>
        </nav>
      </main>

    </div>
  )
}

export async function getStaticProps(){
    const blogPosts = await ContentfulApi.getBlogPosts();
    return {
      props:{blogPosts}
    }
  }