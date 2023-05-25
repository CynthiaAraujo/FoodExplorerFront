import { useState } from "react";
import { Link } from "react-router-dom";

import Polygon from "../../assets/Polygon1.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form, Logo } from "./styles";

import { userAuth } from "../../hooks/auth";

export function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singIn } = userAuth();

  function handleSingIn() {
    if (!password || !email) {
      return alert("Preencha todos os campos");
    }

    return singIn({ email, password });
  }

  return (
    <Container>
      <Logo>
        <img src={Polygon} alt="Logo_hexagon" />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <h1>Faça login</h1>

        <label htmlFor="email">
          Email
          <Input
            placeholder="Exemplo:exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            onClick
            name="email"
            id="email"
          />
        </label>

        <label htmlFor="senha">
          Senha
          <Input
            placeholder="No mínim 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="senha"
            id="senha"
          />
        </label>

        <Button title="Entrar" onClick={handleSingIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
