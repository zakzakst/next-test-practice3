import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./styles.module.css";

type Props = {
  body: string;
};

export const Markdown = ({ body }: Props) => {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};
