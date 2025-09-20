import CryptoService from "../../Security/CryptoService";
import ApiClientJogadores from "../../Services/ApiClientJogadores";
const api = new ApiClientJogadores()
const crypto = new CryptoService();

class ControllerJogadores {

    constructor(jogador) {
        this.jogador = jogador;
    }

    async CreateNewJogador(){

       this.jogador.senha = crypto.hashSHA256(this.jogador.senha) 
       let resultado = await api.CreateNewJogador(this.jogador);

       console.log(resultado);
    }

    async CheckExistsJogador(){
       let resultado = await api.CheckExistsJogador(this.jogador);

       console.log(resultado);
    }

    async GetJogador(){
       let resultado = await api.GetJogador(this.jogador);

       console.log(resultado);
    }

    async GetAllJogador(){
       let resultado = await api.GetAllJogadores(this.jogador);

       console.log(resultado);
    }

    async UpdateJogador(){
       let resultado = await api.UpdateJogador(this.jogador);

       console.log(resultado);
    }

    async UpdatePassJogador(){
       let resultado = await api.UpdatePassword(this.jogador);

       console.log(resultado);
    }

    async DeleteJogador(){
       let resultado = await api.DeleteJogador(this.jogador);

       console.log(resultado);
    }
}

export default ControllerJogadores;