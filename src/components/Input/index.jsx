import { Container } from "./styles";

export function Input({ icon: Icon, onClick, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={24} />}
      <input {...rest} />
    </Container>
  );
}
