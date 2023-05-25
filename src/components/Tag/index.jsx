import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function Tag({
  name,
  isNew = false,
  onClick,
  isFixed = false,
  ...rest
}) {
  return (
    <Container readOnly={!isNew}>
      <input type="text" name={name} readOnly={!isNew} {...rest} />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isFixed ? undefined : isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
