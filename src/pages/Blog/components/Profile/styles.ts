import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin-top: -6rem;
  margin-bottom: 4.5rem;
  display: grid;
  grid-template-columns: 148px 1fr;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme["base-profile"]};

  img {
    border-radius: 10px;
    grid-row: 1/3;
  }
`;

export const ProfileInfoContainer = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h1 {
      color: ${({ theme }) => theme["base-title"]};
    }

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

  > p {
    margin-bottom: 1.5rem;
    line-height: 160%;
  }
`;

export const ProfileDetailsContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme["base-subtitle"]};

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme["base-label"]};
    }
  }
`;
