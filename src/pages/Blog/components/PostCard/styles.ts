import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 14.5rem;
`;

export const PostCardContainer = styled(NavLink)`
  padding: 2rem;
  background: ${({ theme }) => theme["base-post"]};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.25rem 1rem;
  align-items: baseline;
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme["base-label"]};
  }

  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme["base-title"]};
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-span"]};
  }

  p {
    grid-column: span 2;
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
