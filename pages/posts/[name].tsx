import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import * as fs from "fs";
import * as path from "path";
import showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import { exec as execCallback } from "child_process";
import { promisify } from 'util';
import dayjs from 'dayjs';
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/post.module.css";

interface Props {
  title: string;
  html: string;
  createdAt: string;
  category: string;
}

const Post: NextPage<Props> = ({ title, html, createdAt, category }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.post}>
        <div className={styles.meta}>
          <div className={styles.time}>{createdAt}</div>
          <div className={styles.spacer} />
          <div className={styles.category}>
            <Link href={`/${category}`}>
              <a>{category}</a>
            </Link>
          </div>
        </div>
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

export const getStaticProps: GetStaticProps = async (context) => {
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

  const pathName = path.join(process.cwd(), "content", folder, `${name}.md`);
  const content = fs.readFileSync(pathName, { encoding: "utf-8" });
  const html = converter.makeHtml(content);
  const title = content.split("\n").find((line) => /^#\s/.test(line));

  const exec = promisify(execCallback);
  const createdAt = await exec(
    `git log --diff-filter=A --follow --format=%aD -1 -- ${pathName}`
  );

  return {
    props: {
      title: title ? title.replace(/^#\s/, "") : name,
      html,
      createdAt: dayjs(createdAt.stdout).format('YYYY-MM-DD'),
      category: folder,
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
