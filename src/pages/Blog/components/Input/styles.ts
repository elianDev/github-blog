import styled from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  margin-bottom: 3rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme["base-span"]};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme["base-input"]};
    color: ${({ theme }) => theme["base-text"]};
    border: 1px solid ${({ theme }) => theme["base-border"]};
    border-radius: 6px;

    &:focus {
      border-color: ${({ theme }) => theme.blue};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }
`;
