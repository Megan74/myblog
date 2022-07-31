import Link from 'next/link'
import Head from 'next/head'
import { allPosts } from 'contentlayer/generated'
import { pick } from '@contentlayer/client'
import utilStyles from '../styles/utils.module.css'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap");
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue,
            sans-serif;
          background: #333;
          color: #fff;
          font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue,
            sans-serif;
        }
        a {
          color: #fff;
        }
        .content {
          max-width: 600px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
      `}</style>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ slug, date, title }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = allPosts.map((post) => pick(post, ['title', 'date', 'slug']))

  return { props: { posts } }
}
