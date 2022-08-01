import Head from 'next/head'
import { allPosts } from 'contentlayer/generated'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/Layout'

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>


       <Layout>
      <article className="pos">
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>{post.date}</div>

        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { id: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params?.id)

  return { props: { post } }
}
