import { Box, Text, Tooltip } from "@chakra-ui/react";

interface SkillCartoonProps {
  skill: string;
  specialist?: boolean;
}

export default function SkillCartoon({ skill, specialist }: SkillCartoonProps) {
  return (
    <Box
      p="0.6rem"
      border="1px solid rgba(205, 22, 241, 0.5)"
      width="fit-content"
      borderRadius={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(96, 9, 114, 0.171)"
      gap={["1rem", "1rem", "0.5rem"]}
      color="gray.100"
    >
      <Text>{skill}</Text>
      {specialist && (
        <Tooltip label="Specialist" hasArrow bg="gray.600">
          <Text color="yellow">★</Text>
        </Tooltip>
      )}
    </Box>
  );
}
