"use client";

import { Link } from "@chakra-ui/next-js";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface OwnProps {
  href: string;
  Icon: React.ReactElement;
  iconButtonProps: IconButtonProps;
}

export default function CustomIconButton({
  href,
  Icon,
  iconButtonProps,
}: OwnProps) {
  return (
    <Link href={href} target="_blank">
      <IconButton
        {...iconButtonProps}
        bg="transparent"
        fontSize={["1.5rem", "2rem"]}
        color="rgba(129, 90, 213, 0.596)"
        _hover={{
          color: "primary.purple",
          bg: "transparent",
        }}
        icon={Icon}
        mt={["0.5rem", "2rem"]}
      />
    </Link>
  );
}
