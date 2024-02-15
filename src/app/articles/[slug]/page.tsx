// pages/posts/[slug].tsx

import fs from "fs";
import path from "path";
import { Box } from "@chakra-ui/react";
import { markdownToHtml } from "../../utils/markdownToHtml";

export interface PostMetadata {
  title: string;
  date: string;
  author: string;
}

export interface PostProps {
  contentHtml: string;
}

export const GeneratePost = async (slug: string): Promise<PostProps> => {
  const postPath = path.join(process.cwd(), "posts", `${slug}.md`);
  const markdown = fs.readFileSync(postPath, "utf8");
  const { contentHtml } = await markdownToHtml(markdown);

  return {
    contentHtml,
  };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { contentHtml } = await GeneratePost(slug);

  return (
    <Box>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Box>
  );
}

// Exemplo de GetStaticPaths para gerar caminhos dinâmicos baseados em slugs de arquivos Markdown
// export const getStaticPaths: GetStaticPaths = async () => {
//   const postsDirectory = path.join(process.cwd(), "posts");
//   const filenames = fs.readdirSync(postsDirectory);
//   const paths = filenames.map((filename) => ({
//     params: { slug: filename.replace(/\.md$/, "") },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
