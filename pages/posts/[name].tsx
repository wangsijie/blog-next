import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import * as fs from "fs";
import * as path from "path";
import showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/post.module.css";

interface Props {
  title: string;
  html: string;
}

const Post: NextPage<Props> = ({ title, html }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.post}>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = (context) => {
  const converter = new showdown.Converter({
    tables: true,
    extensions: [showdownHighlight({ pre: true })],
  });
  const name = context?.params?.name;
  if (!name) {
    return { notFound: true };
  }

  const folders = fs.readdirSync(path.join(process.cwd(), "content"));
  const folder = folders.find((f) =>
    fs.existsSync(path.join(process.cwd(), "content", f, `${name}.md`))
  );
  if (!folder) {
    return { notFound: true };
  }

  const content = fs.readFileSync(
    path.join(process.cwd(), "content", folder, `${name}.md`),
    { encoding: "utf-8" }
  );
  const html = converter.makeHtml(content);
  const title = content.split('\n').find(line => /^#\s/.test(line));

  return {
    props: {
      title: title ? title.replace(/^#\s/, '') : name,
      html,
    },
  };
};

export async function getStaticPaths() {
  const folders = fs.readdirSync(path.join(process.cwd(), "content"));
  const posts = [];

  for (const folder of folders) {
    const files = fs.readdirSync(path.join(process.cwd(), "content", folder));
    posts.push(...files.map((file) => file.replace(/\.md$/, "")));
  }

  return {
    paths: posts.map((post) => ({ params: { name: post } })),
    fallback: false,
  };
}
