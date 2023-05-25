import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container, Form, Logo } from "./styles";

import { api } from "../../services/api";

import Polygon from "../../assets/Polygon1.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSingUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    return api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi posssivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <Logo>
        <img src={Polygon} alt="Logo_hexagon" />
        <h1>food explorer</h1>
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>

        <label htmlFor="name">
          Seu nome
          <Input
            placeholder="Exemplo:Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
          />
        </label>

        <label htmlFor="email">
          Email
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
        </label>

        <label htmlFor="senha">
          Senha
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="senha"
            id="senha"
          />
        </label>

        <Button title="Criar conta" onClick={handleSingUp} />
        <Link to="/">Já tenho uma Conta</Link>
      </Form>
    </Container>
  );
}
