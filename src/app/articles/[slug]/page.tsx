// pages/posts/[slug].tsx

import fs from "fs";
import path from "path";
import { Box } from "@chakra-ui/react";
import { markdownToHtml } from "../../utils/markdownToHtml";
import "./styles.css";
import MarkdownRenderer from "@/app/components/shared/MarkdownRenderer";

export interface PostMetadata {
  title: string;
  date: string;
  author: string;
}

export interface PostProps {
  contentHtml: string;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const GeneratePost = async (slug: string): Promise<PostProps> => {
    const postPath = path.join(process.cwd(), "posts", `${slug}.md`);
    const markdown = fs.readFileSync(postPath, "utf8");
    const { contentHtml } = await markdownToHtml(markdown);

    return {
      contentHtml,
    };
  };

  const { slug } = params;
  const { contentHtml } = await GeneratePost(slug);

  return (
    <Box>
      <MarkdownRenderer htmlContent={contentHtml} />
    </Box>
  );
}
