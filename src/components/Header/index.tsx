import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  );
};

export default Header;
