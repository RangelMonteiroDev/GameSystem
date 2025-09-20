import { Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import CreateJogadorForm from "./Views/Jogadores/Forms/CreateJogadorForm.jsx";

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Bem-vindo ao GameSystem</h1>
      <p>Use a barra de navegação para adicionar novos jogadores.</p>
    </Container>
  );
}

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">GameSystem</Navbar.Brand>
          <Nav className="ms-auto">
            <Button as={Link} to="/novoJogador" variant="success">
              Novo Jogador
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novoJogador" element={<CreateJogadorForm />} />
      </Routes>
    </>
  );
}

export default App;
