import { Footer } from "../Footer";
import { HeaderUser } from "../HeaderUser";
import { Container } from "./styles";

export function Layout({ children }) {
  return (
    <Container>
      <HeaderUser />
      {children}
      <Footer />
    </Container>
  );
}
