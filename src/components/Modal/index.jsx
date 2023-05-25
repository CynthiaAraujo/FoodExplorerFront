import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../hooks/auth";
import { Footer } from "../Footer";
import { SearchInput } from "../SearchInput";
import {
  Container,
  HeaderModal,
  ItensMenu,
  Main,
  ModalButton,
  Text,
} from "./styles";

ReactModal.setAppElement("#root");

export function Modal({ admin = false, handleSearch }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { signOut } = userAuth();
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleAddPlate() {
    navigate("/AddPrato");
  }

  const newPlate = admin ? (
    <>
      <ModalButton type="button" title="Novo Prato" onClick={handleAddPlate}>
        <Text>Novo Prato</Text>
      </ModalButton>
      <ModalButton type="button" title="Sair" onClick={handleSignOut}>
        <Text>Sair</Text>
      </ModalButton>
    </>
  ) : (
    <ModalButton type="button" title="Sair" onClick={handleSignOut}>
      <Text>Sair</Text>
    </ModalButton>
  );

  return (
    <Container>
      <FiMenu onClick={openModal} size={20} />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            background: "#000A0F",
            border: "none",
            width: "100vw",
            height: "100vh",
            inset: 0,
            padding: 0,
          },
        }}
      >
        <HeaderModal>
          <FiX onClick={closeModal} size={20} />
          <span>Menu</span>
        </HeaderModal>

        <Main>
          <SearchInput handleSearch={handleSearch} />
          <ItensMenu>{newPlate}</ItensMenu>
        </Main>
        <Footer />
      </ReactModal>
    </Container>
  );
}
