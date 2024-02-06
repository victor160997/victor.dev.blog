import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";

export default function NavBar() {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      bg="transparent"
      height="100px"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
    >
      <Box border="2px solid rgba(63, 63, 70, 0.4)" borderRadius={50}>
        <Image
          src="/victor.jpg"
          alt="Dan Abramov"
          width={50}
          height={50}
          borderRadius={50}
        />
      </Box>
      {isDesktop ? <DesktopMenu /> : <MobileMenu />}
      {isDesktop && <div />}
    </Box>
  );
}
