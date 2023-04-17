import { relativeDateFormatter } from "../../../../utils/formatter";
import { PostCardContainer } from "./styles";

interface PostCardProps {
  title: string;
  createdAt: string;
  body: string;
  id: number;
}

const PostCard = ({ title, createdAt, body, id }: PostCardProps) => {
  const formattedDate = relativeDateFormatter(createdAt);

  return (
    <PostCardContainer to={`/post/${id}`}>
      <h2>{title}</h2>
      <span>{formattedDate}</span>
      <p>{body}</p>
    </PostCardContainer>
  );
};

export default PostCard;
