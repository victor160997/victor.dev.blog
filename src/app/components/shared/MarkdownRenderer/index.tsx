import { FC } from "react";
import parse, { Element } from "html-react-parser";
import CodeBlock from "../CodeBlock";

interface MarkdownRendererProps {
  htmlContent: string;
}

const MarkdownRenderer: FC<MarkdownRendererProps> = ({ htmlContent }) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.name === "pre") {
        const codeElement = domNode.children.find(
          (child: any) => child instanceof Element && child.name === "code"
        );

        if (codeElement) {
          const className =
            codeElement instanceof Element && codeElement.attribs
              ? codeElement.attribs.class || ""
              : "";
          const languageMatch = className.match(/language-(\w+)/);
          const language = languageMatch ? languageMatch[1] : "plaintext";

          const codeString =
            codeElement instanceof Element && codeElement.children.length
              ? codeElement.children.map((child: any) => child.data).join("")
              : "";

          return <CodeBlock codeString={codeString} language={language} />;
        }
      }
    },
  };

  return <div>{parse(htmlContent, options)}</div>;
};

export default MarkdownRenderer;
