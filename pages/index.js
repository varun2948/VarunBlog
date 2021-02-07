import Head from 'next/head';
import Link from 'next/link';
import SocialLinks from '../components/SocialLinks';
import ContentfulApi from '../utils/ContentfulApi';

export default function Home(props) {
  console.log(props);
  return (
    <div className="container">
      <Head>
        <title>Varun Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Varun Blog</h1>
        <nav>
          <p>Nav</p>
          <Link href="/blog">GO To Blog</Link>
        </nav>
        <SocialLinks socialLinks={props.socialLinks.data.socialLinkCollection.items}/>
      </main>

    </div>
  )
}

export async function getStaticProps(){
  const socialLinks = await ContentfulApi.getSocialLinks();
  return {
    props:{socialLinks}
  }
}
