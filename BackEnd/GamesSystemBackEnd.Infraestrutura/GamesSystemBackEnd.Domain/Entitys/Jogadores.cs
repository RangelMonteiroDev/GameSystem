using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GamesSystemBackEnd.Domain.Entitys
{
    public class Jogadores
    {   
        [NotMapped]
        public bool NotFound { get; set; }

        [Key]
        public int JogadorID { get; private set; }
        public string Name { get; private set; }
        public string NickName { get; private set; }
        public string Email { get; private set; }
        public string Senha { get; private set; }
        public bool Ativo { get; private set; }

        public Jogadores(string Name, string NickName, string Email, string Senha, bool Ativo)
        {
            this.Name = Name;
            this.NickName = NickName;
            this.Email = Email;
            this.Senha = Senha;
            this.Ativo = Ativo;
        }

        public Jogadores(bool notExists)
        {
            this.NotFound = notExists;
        }

        public void UpdateJogador(string Name, string NickName)
        {
            this.Name = Name;
            this.NickName = NickName;
        }
        public void UpdatePassJogador(string NovaSenha)
        {
            this.Senha = NovaSenha;  
        }
        public void DeactivateJogador(bool desativar)
        {
            this.Ativo = desativar;
        }
    }
}