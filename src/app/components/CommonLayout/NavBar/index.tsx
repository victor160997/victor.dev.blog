"use client";

import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Box
      bg="transparent"
      height="100px"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position={isScrolled ? "inherit" : "sticky"}
      top={0}
      transition={"all 0.3s ease"}
    >
      <Link href="/">
        <Box border="2px solid rgba(63, 63, 70, 0.4)" borderRadius={50}>
          <Image
            src="/victor.jpg"
            alt="Dan Abramov"
            width={50}
            height={50}
            borderRadius={50}
          />
        </Box>
      </Link>
      {isDesktop ? <DesktopMenu /> : <MobileMenu />}
      {isDesktop && <div />}
    </Box>
  );
}
