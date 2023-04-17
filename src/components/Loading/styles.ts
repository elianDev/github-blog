import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 3rem;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: 0.5rem solid ${({ theme }) => theme.blue};
  border-top: 0.5rem solid transparent;
  border-radius: 50%;

  animation: ${rotate} 1s linear;
`;
