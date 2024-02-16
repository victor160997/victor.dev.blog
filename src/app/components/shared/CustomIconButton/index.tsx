"use client";

import { DownloadIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { Button, IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface OwnProps {
  href: string;
  Icon: React.ReactElement;
  iconButtonProps: IconButtonProps;
  text?: string;
  isButton?: boolean;
  isDownload?: boolean;
}

export default function CustomIconButton({
  href,
  Icon,
  iconButtonProps,
  text,
  isButton,
  isDownload,
}: OwnProps) {
  return (
    <Link href={href} target="_blank" download={isDownload ? true : false}>
      {isButton ? (
        <Button
          rightIcon={Icon}
          bg="rgba(129, 90, 213, 0.233)"
          fontSize={["0.5rem", "1rem"]}
          mt={["0.5rem", "2rem"]}
          color="gray.200"
          _hover={{
            bg: "primary.purple",
            color: "gray.900",
          }}
          height={["2rem", "3rem"]}
        >
          {text ?? "-"}
        </Button>
      ) : (
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
      )}
    </Link>
  );
}
