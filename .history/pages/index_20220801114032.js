import Link from 'next/link'
import Head from 'next/head'
import { allPosts } from 'contentlayer/generated'
import { pick } from '@contentlayer/client'
import Header from '../components/Header'
import Footer from '../../components/Footer'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
        <h2>Blog</h2>
        <ul>
          {posts.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
        <Footer />
    </>
  )
}

export async function getStaticProps() {
  const posts = allPosts.map((post) => pick(post, ['title', 'date', 'slug']))

  return { props: { posts } }
}
