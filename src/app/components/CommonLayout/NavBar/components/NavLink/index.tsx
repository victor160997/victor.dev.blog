import { Text } from "@chakra-ui/react";
import Link from "next/link";

export function NavLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <Link href={href} passHref>
      <Text
        cursor="pointer" // Adiciona o cursor de ponteiro para indicar um link clicável
        position="relative" // Para posicionar o pseudo-elemento
        _hover={{
          color: "primary.purple", // Cor do texto ao passar o mouse
          // Aqui vamos adicionar o text-shadow para o efeito neon
          boxShadow: "0 6px 8px -8px rgb(195, 0, 255)",
        }}
        transition="color 0.2s, text-shadow 0.2s" // Adiciona uma transição suave para o hover
        height="35px"
        display="flex"
        alignItems="center"
        fontSize="0.9rem"
      >
        {children}
      </Text>
    </Link>
  );
}
