import { FiLogOut } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Polygon from "../../assets/Polygon1.png";
import { userAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { SearchInput } from "../SearchInput";
import { Container, Logo, Logout } from "./styles";

export function HeaderUser({ handleSearch }) {
  const { signOut } = userAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleRequestPlates() {
    navigate("/");
  }

  return (
    <Container>
      <div className="menu">
        <Modal handleSearch={handleSearch} />
      </div>
      <Logo>
        <img src={Polygon} alt="Logo_hexagon" />
        <h1>food explorer</h1>
      </Logo>

      <div className="input">
        <SearchInput handleSearch={handleSearch} />
      </div>

      <Button
        className="newPlate"
        title="Pedidos ("
        icon={TfiReceipt}
        numberOfOrders="0"
        onClick={handleRequestPlates}
      />

      <Logout onClick={handleSignOut}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
