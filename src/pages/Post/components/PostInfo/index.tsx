import React from "react";
import { PostDetailsContainer, PostInfoContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { relativeDateFormatter } from "../../../../utils/formatter";
import Loading from "../../../../components/Loading";

interface PostInfoProps {
  html_url: string;
  title: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: number;
  body: string;
  loading: boolean;
}

const PostInfo = ({
  html_url,
  title,
  user,
  created_at,
  comments,
  body,
  loading,
}: PostInfoProps) => {
  const formattedDate = relativeDateFormatter(created_at);

  if (loading) return <Loading />;
  return (
    <PostInfoContainer>
      <div>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </NavLink>

        <a href={html_url} target="_blank">
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>

      <h1>{title}</h1>

      <PostDetailsContainer>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {user.login}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formattedDate}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {comments} comentários
        </li>
      </PostDetailsContainer>
    </PostInfoContainer>
  );
};

export default PostInfo;
