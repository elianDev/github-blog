import styled from "styled-components";

export const PostInfoContainer = styled.div`
  margin-top: -6rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme["base-profile"]};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.blue};
      font-weight: bold;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom-color: ${({ theme }) => theme.blue};
        transition: border-bottom 0.3s;
      }
    }
  }

  h1 {
    color: ${({ theme }) => theme["base-title"]};
    margin-bottom: 0.5rem;
  }
`;

export const PostDetailsContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme["base-span"]};

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme["base-label"]};
    }
  }
`;
