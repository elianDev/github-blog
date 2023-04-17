import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostContentContainer } from "./styles";

interface PostContentProps {
  content: string;
}

const PostContent = ({ content }: PostContentProps) => {
  return <PostContentContainer>{content}</PostContentContainer>;
};

export default PostContent;
