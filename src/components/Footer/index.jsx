import Polygon2 from "../../assets/Polygon2.png";
import { Container, Logo } from "./styles";

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={Polygon2} alt="Logo_hexagon" />
        <h1>food explorer</h1>
      </Logo>

      <h4>© 2023 - Todos os direitos reservados.</h4>
    </Container>
  );
}
