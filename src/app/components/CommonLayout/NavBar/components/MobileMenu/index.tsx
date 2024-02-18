import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NavLink } from "../NavLink";

export default function MobileMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        bg="rgba(41, 41, 41, 0.5)"
        color="white"
        border="1px solid rgba(63, 63, 70, 0.4)"
        _hover={{
          color: "rgb(195, 0, 255)",
        }}
        _active={{
          bg: "rgba(195, 0, 255, 0.5)",
        }}
      />
      <MenuList
        bg="rgba(41, 41, 41, 0.7)"
        border="1px solid rgba(63, 63, 70, 0.5)"
      >
        <MenuItem bg="rgba(41, 41, 41, 0.9)">
          <NavLink href="/articles">Articles</NavLink>
        </MenuItem>
        <MenuItem bg="rgba(41, 41, 41, 0.9)">
          <NavLink href="/projects">Projects</NavLink>
        </MenuItem>
        <MenuItem bg="rgba(41, 41, 41, 0.9)">
          <NavLink href="/contact-me">Contact me</NavLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
