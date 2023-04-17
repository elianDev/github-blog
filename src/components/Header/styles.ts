import styled from "styled-components";
import headerBg from "../../assets/header-bg.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 9rem;
  position: relative;
  z-index: -5;
`;
