import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { Button } from "../../components/Button";

export function NotFound() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Container>
      <h2>Page Not Found</h2>
      <Button
        Icon={TbError404}
        iconSize={30}
        title="Click here to back home"
        onClick={handleNavigate}
      />
    </Container>
  );
}
