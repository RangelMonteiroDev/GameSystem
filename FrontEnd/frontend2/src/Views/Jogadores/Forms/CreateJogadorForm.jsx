import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import jogadoresCreate from "../../../Models/Jogadores/jogadoresCreate";
import ControllerJogadores from "../../../Controllers/v1/ControllerJogadores";

function CreateJogadorForm() {
  const [form, setForm] = useState({ name: "", nickName: "", email: "", senha: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jogador = new jogadoresCreate(form.name, form.nickName, form.email, form.senha);
    const controller = new ControllerJogadores(jogador);

    await controller.CreateNewJogador();
    navigate("/novoJogador");
  };

  return (
    <Container className="mt-4">
      <h2>Novo Jogador</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Digite o nome"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNickName">
          <Form.Label>NickName</Form.Label>
          <Form.Control
            type="text"
            name="nickName"
            value={form.nickName}
            onChange={handleChange}
            placeholder="Digite o NickName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Digite o email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSenha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            placeholder="Digite a senha"
          />
        </Form.Group>

        <Button variant="success" type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}

export default CreateJogadorForm;

