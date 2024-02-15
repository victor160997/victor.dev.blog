import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

export async function markdownToHtml(markdown: string) {
  const result = matter(markdown);
  const processedContent = await remark().use(html).process(result.content);
  const contentHtml = processedContent.toString();

  return { contentHtml, ...result.data };
}
