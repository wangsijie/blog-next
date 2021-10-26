import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import * as fs from "fs";
import * as path from "path";
import showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import { exec as execCallback } from "child_process";
import { promisify } from "util";
import dayjs from "dayjs";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/page.module.css";
import About from "../components/about";

interface Props {
  title: string;
  posts?: { url: string; title: string }[];
  html?: string;
  name?: string;
}

const Page: NextPage<Props> = ({ posts, title, html, name }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.page}>
        {posts && (
          <ul>
            {posts.map((post) => (
              <li key={post.url}>
                <Link href={`/posts/${post.url}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {html && (
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        )}
        {name === 'about' && <About />}
      </div>
      <Footer />
    </div>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context?.params?.name;
  if (!name) {
    return { notFound: true };
  }

  const folders = fs.readdirSync(path.join(process.cwd(), "content"));
  const folder = folders.find((f) => f === name);
  if (!folder) {
    // is page
    const converter = new showdown.Converter({
      tables: true,
      extensions: [showdownHighlight({ pre: true })],
    });

    const pathName = path.join(process.cwd(), "content", "pages", `${name}.md`);
    const content = fs.readFileSync(pathName, { encoding: "utf-8" });
    const html = converter.makeHtml(content);
    const title = content.split("\n").find((line) => /^#\s/.test(line));
    return {
      props: {
        title: title ? title.replace(/^#\s/, "") : name,
        html,
        name,
      },
    };
  }

  const files = fs.readdirSync(path.join(process.cwd(), "content", folder));
  const posts = [];

  for (const file of files) {
    const pathName = path.join(process.cwd(), "content", folder, file);
    const content = fs.readFileSync(pathName, { encoding: "utf-8" });
    const title = content.split("\n").find((line) => /^#\s/.test(line));
    const exec = promisify(execCallback);
    const createdAt = dayjs(
      (
        await exec(
          `git log --diff-filter=A --follow --format=%aD -1 -- ${pathName}`
        )
      ).stdout
    );
    const url = file.replace(/\.md$/, "");
    posts.push({ title, createdAt, url });
  }

  return {
    props: {
      title: name,
      posts: posts
        .filter((post) => post.title)
        .sort((a, b) => b.createdAt.unix() - a.createdAt.unix())
        .map((post) => ({
          title: post.title!.replace(/^#\s/, ""),
          url: post.url,
        })),
    },
  };
};

export async function getStaticPaths() {
  const folders = fs.readdirSync(path.join(process.cwd(), "content"));
  const items = [];

  for (const folder of folders) {
    items.push(folder.replace(/\.md$/, ""));
  }

  const pages = fs.readdirSync(path.join(process.cwd(), "content", "pages"));

  for (const page of pages) {
    items.push(page.replace(/\.md$/, ""));
  }

  return {
    paths: items.map((name) => ({ params: { name } })),
    fallback: false,
  };
}
