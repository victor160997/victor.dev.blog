"use client";

import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";

export function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      w="100%"
      minH="100vh"
      bgColor="#000000"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxSizing="border-box"
      padding={0}
    >
      <Box
        w={{ base: "100%", lg: "990px", md: "90%" }}
        minH="100vh"
        bgGradient="linear(to-t, rgba(56, 56, 56, 0.4), rgba(36, 36, 36, 0.4), rgba(14, 14, 14, 0.4))"
        borderInline="0.5px solid rgba(63, 63, 70, 0.4)"
        paddingInline={{ base: "1rem", lg: "2rem" }}
      >
        <NavBar />
        {children}
      </Box>
    </Box>
  );
}
