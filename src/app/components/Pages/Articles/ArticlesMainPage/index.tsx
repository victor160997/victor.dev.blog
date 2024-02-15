import { Box, Heading, Text } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

interface PostMetadataProps {
  title: string;
  date: string;
  author: string;
  path: string;
  intro: string;
}

export default async function ArticlesMainPage() {
  const GetPosts = async (): Promise<PostMetadataProps[]> => {
    const repositoryPath = path.join(process.cwd(), "posts");
    const posts = fs.readdirSync(repositoryPath);
    const postsPath: string[] = posts.map((post) =>
      path.join(repositoryPath, post)
    );
    const metadatas = await Promise.all(
      postsPath.map((postPath) => {
        const markdownWithMetadata = fs.readFileSync(
          path.join(postPath),
          "utf-8"
        );
        const { data: metadata } = matter(markdownWithMetadata);
        return metadata;
      })
    );
    return metadatas as PostMetadataProps[];
  };
  const posts = await GetPosts();
  return posts.map((post, i) => (
    <Link
      key={i}
      href={post.path} // Substitua `post.link` pela sua URL específica
    >
      <Box
        borderRadius="lg"
        overflow="hidden"
        p={5}
        mb={4}
        transition={"all 0.3s ease"}
        _hover={{ backgroundColor: "gray.900" }} // Adiciona um efeito de sombra ao passar o mouse
      >
        <Text color="gray.600">{`| ${post.date}`}</Text>
        <Heading as="h3" size="lg" my={2}>
          {post.title}
        </Heading>
        <Text mb={4} color="#969696">
          {post.intro}
        </Text>
        <Text color="primary.purple">➔ Read article</Text>
      </Box>
    </Link>
  ));
}
