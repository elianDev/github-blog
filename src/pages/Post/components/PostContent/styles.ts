import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const PostContentContainer = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 4.5rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.blue};
  }
`;
