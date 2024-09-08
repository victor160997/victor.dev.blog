import { Box, Heading, Text } from "@chakra-ui/react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import CustomIconButton from "../../shared/CustomIconButton";
import ArticlesMainPage from "../Articles/ArticlesMainPage";
import SkillCartoon from "./components/SkillCartoon";

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
          marginRight: ["0.5rem", "1rem"],
        }}
      />

      <CustomIconButton
        Icon={<FaDownload />}
        href="victor_rodrigues_fullstack_developer_resume.pdf"
        iconButtonProps={{
          "aria-label": "Download CV",
          marginRight: ["0.5rem", "1rem"],
        }}
        isButton
        text="Download CV"
        isDownload
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
      <Box
        paddingBlock="1rem"
        display="flex"
        flexDirection={["column", "column", "row"]}
        gap={["1rem", "1rem", "0.5rem"]}
        mt={["1rem", "1.5rem"]}
      >
        <Box
          w={["100%", "100%", "50%"]}
          borderLeft="1px solid rgba(74, 85, 104, 0.5)"
        >
          <Heading as="h3" fontSize="1.5rem" paddingStart="1rem">
            Articles & Posts
          </Heading>
          <ArticlesMainPage />
        </Box>
        <Box
          w={["100%", "100%", "50%"]}
          borderLeft="1px solid rgba(74, 85, 104, 0.5)"
        >
          <Heading as="h3" fontSize="1.5rem" paddingStart="1rem">
            Skills
          </Heading>
          <Box
            p="1rem"
            display="flex"
            width="fit-content"
            flexWrap="wrap"
            gap="0.5rem"
          >
            <SkillCartoon skill="JavaScript" specialist />
            <SkillCartoon skill="TypeScript" specialist />
            <SkillCartoon skill="ReactJs" specialist />
            <SkillCartoon skill="Node.js" specialist />
            <SkillCartoon skill="C#" specialist />
            <SkillCartoon skill=".NET" specialist />
            <SkillCartoon skill="NextJs" specialist />
            <SkillCartoon skill="Bash" />
            <SkillCartoon skill="HTML" />
            <SkillCartoon skill="CSS" />
            <SkillCartoon skill="SCSS" />
            <SkillCartoon skill="Styled Components" />
            <SkillCartoon skill="UX/UI" />
            <SkillCartoon skill="Material UI" />
            <SkillCartoon skill="Chakra UI" />
            <SkillCartoon skill="Radix UI" />
            <SkillCartoon skill="React Hooks" />
            <SkillCartoon skill="React Testing Library" />
            <SkillCartoon skill="Jest" />
            <SkillCartoon skill="Context API" />
            <SkillCartoon skill="Redux" />
            <SkillCartoon skill="Bootstrap" />
            <SkillCartoon skill="MySql" />
            <SkillCartoon skill="PostgreSQL" />
            <SkillCartoon skill="SQL Server" />
            <SkillCartoon skill="MongoDB" />
            <SkillCartoon skill="Docker" />
            <SkillCartoon skill="Sequelize" />
            <SkillCartoon skill="Mocha" />
            <SkillCartoon skill="Chai" />
            <SkillCartoon skill="Sinon" />
            <SkillCartoon skill="Stub" />
            <SkillCartoon skill="GitHub" />
            <SkillCartoon skill="Azure DevOps" />
            <SkillCartoon skill="Slack" />
            <SkillCartoon skill="Azure Web Services" />
            <SkillCartoon skill="Data Dog" />
            <SkillCartoon skill="Scrum" />
            <SkillCartoon skill="Kanban" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
