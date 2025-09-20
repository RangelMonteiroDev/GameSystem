import axios from "axios";

class ApiClientJogadores {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5267/api"
    });
  }

  async CreateNewJogador(jogador) {
    return await this.api.post("/jogadores", jogador);
  }

  async CheckExistsJogador(jogador) {
    return await this.api.get("/jogadores/CheckJogador", {
      params: JSON.stringify(jogador)
    });
  }

  async GetJogador(jogador) {
    return await this.api.get("/jogadores/GetJogador", {
      params: JSON.stringify(jogador)
    });
  }

  async GetAllJogadores(JogadoresAtivos) {
    return await this.api.get("/jogadores/GetAllJogador", {
      params: JSON.stringify(JogadoresAtivos)
    });
  }

  async UpdateJogador(jogador) {
    return await this.api.put("/jogadores/UpdateJogador", jogador);
  }

  async UpdatePassword(jogador) {
    return await this.api.put("/jogadores/UpdatePassJogador", jogador);
  }

  async DeleteJogador(ID) {
    return await this.api.delete("/jogadores", {
      params: JSON.stringify(ID)
    });
  }
}

export default ApiClientJogadores;
