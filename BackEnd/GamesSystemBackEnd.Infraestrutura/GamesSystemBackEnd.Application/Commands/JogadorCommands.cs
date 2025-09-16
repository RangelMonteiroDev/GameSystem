using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GamesSystemBackEnd.Application.Responses;
using MediatR;

namespace GamesSystemBackEnd.Application.Commands
{
    public class JogadorCommandCreate : IRequest<JogadorResponseCreate>
    {
        public string Name { get; set; }
        public string NickName { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool Ativo { get; set; }
    }

    public class JogadorCommandUpdate : IRequest<JogadorResponseBooleanStatus>
    {
        public string Name { get; set; }
        public string NickName { get; set; }
        public string Email { get; set; }
    }

    public class JogadorCommandUpdatePassword : IRequest<JogadorResponseBooleanStatus>
    {
        public int ID { get; set; }
        public string NovaSenha { get; set; }
    }

    public class JogadorCommandDelete : IRequest<JogadorResponseBooleanStatus>
    {
        public int ID { get; set; }
    }
}