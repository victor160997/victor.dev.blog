import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "../NavLink";

export default function DesktopMenu() {
  return (
    <Box
      bg="rgba(41, 41, 41, 0.5)"
      color="white"
      width="fit-content"
      borderRadius="50px"
      border="1px solid rgba(63, 63, 70, 0.4)"
    >
      <Flex height={"35px"} py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Stack direction={"row"} spacing={4}>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/speaking">Speaking</NavLink>
            <NavLink href="/hire-me">Hire me</NavLink>
            <NavLink href="/uses">Uses</NavLink>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
