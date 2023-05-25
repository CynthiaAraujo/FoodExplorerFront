import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Polygon from "../../assets/Polygon1.png";
import { userAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Modal } from "../Modal";

import { SearchInput } from "../SearchInput";
import { Container, Logout } from "./styles";

export function HeaderAdmin({ handleSearch }) {
  const { signOut } = userAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleAddPlate() {
    navigate("/AddPrato");
  }

  return (
    <Container>
      <div className="menu">
        <Modal admin handleSearch={handleSearch} />
      </div>
      <div className="teste">
        <div className="admin">
          <div className="logo">
            <img src={Polygon} alt="" />
            <h3>food explorer</h3>
          </div>
          <p>admin</p>
        </div>

        <div className="input">
          <SearchInput handleSearch={handleSearch} />
        </div>
      </div>

      <Button
        className="newPlate"
        title="Novo Prato"
        onClick={handleAddPlate}
      />

      <Logout onClick={handleSignOut}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
