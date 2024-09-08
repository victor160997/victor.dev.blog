import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  codeString: string;
  language?: string;
}

const CodeBlock: FC<CodeBlockProps> = ({
  codeString,
  language = "javascript",
}) => {
  const customStyle = {
    ...dark,
    'pre[class*="language-"]': {
      ...dark['pre[class*="language-"]'],
      background: "#282C34", // Defina aqui a cor de fundo desejada
      border: "1px solid #282C34", // Defina aqui a cor da borda desejada
    },
  };
  return (
    <SyntaxHighlighter language={language} style={customStyle} wrapLines={true}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
