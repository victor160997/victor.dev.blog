import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomIconButton from "../../shared/CustomIconButton";
import ArticlesMainPage from "../Articles/ArticlesMainPage";

export default function HomePage() {
  return (
    <Box height="fit-content" width="100%" bg="tranparent">
      <Heading
        as="h1"
        fontSize={["2rem", "3rem"]}
        lineHeight={["2rem", "3rem"]}
        fontWeight="800"
        mt={["0.5rem", "1rem"]}
        color="primary.purple"
        textShadow="0 8px 30px rgba(255, 255, 255, 0.301)"
      >
        Victor Rodrigues
      </Heading>
      <Heading
        textShadow="0 8px 30px rgba(129, 90, 213, 0.596)"
        as="h1"
        fontSize={["2rem", "3rem"]}
        lineHeight={["2rem", "3rem"]}
        fontWeight="800"
        mt={["0.5rem", "1rem"]}
      >
        Software Engineer
      </Heading>

      <CustomIconButton
        Icon={<FaLinkedin />}
        href="https://www.linkedin.com/in/victor160997/"
        iconButtonProps={{
          "aria-label": "LinkedIn",
          marginRight: ["0.5rem", "1rem"],
        }}
      />
      <CustomIconButton
        Icon={<FaGithub />}
        href="https://github.com/victor160997"
        iconButtonProps={{
          "aria-label": "GitHub",
        }}
      />
      <Text mt={["1rem", "1.5rem"]} color="#969696">
        My name is Victor, a Software Engineer boasting over three years of
        professional experience and a passion for technology development
        spanning more than four years. Hailing from Brazil, I possess a keen
        enthusiasm for emerging technologies, AI solutions, and everything
        related to accelerated learning and education. My journey in tech is
        driven by a relentless pursuit of innovation and a commitment to
        leveraging cutting-edge tools to solve complex challenges.
      </Text>
      <Box paddingBlock="1rem">
        <ArticlesMainPage />
      </Box>
    </Box>
  );
}
