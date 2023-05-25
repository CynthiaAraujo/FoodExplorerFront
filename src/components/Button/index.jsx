import { Container } from "./styles";

export function Button({
  title,
  icon: Icon,
  loading = false,
  numberOfOrders,
  children,
  ...rest
}) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={24} />}
      <span>{title}</span>
      <span>{numberOfOrders}</span>
      {children}
    </Container>
  );
}
