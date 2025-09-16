using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using GamesSystemBackEnd.Application.AutoMapping;
using GamesSystemBackEnd.Application.Handlers.JogadorHandlers;
using GamesSystemBackEnd.Application.IServices;
using GamesSystemBackEnd.Application.Services;
using GamesSystemBackEnd.Domain.Interfaces;
using GamesSystemBackEnd.Domain.UseCases;
using GamesSystemBackEnd.Domain.UseCases.IUseCases;
using GamesSystemBackEnd.Infraestrutura.Data;
using GamesSystemBackEnd.Infraestrutura.Respositorys;
using GamesSystemBackEnd.Infraestrutura.Transactions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace GamesSystemBackEnd.API.DependencyInjection
{
    public static class ServicesRegistration
    {
        public static void AddInfrastructureServices(this IServiceCollection services, string connectionString)
        {
            // DbContext
            services.AddDbContext<AppDataSqlServerContext>(options =>
                options.UseSqlServer(connectionString)
            );

            // Services / UseCases
            services.AddScoped<IServiceJogador, JogadoresServices>();
            services.AddScoped<IJogadorUseCase, JogadorUseCase>();

            // Unit of Work
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            // Repositories
            services.AddScoped<IJogadores, JogadoresRepository>();

            // AutoMapper
            services.AddAutoMapper(typeof(AutoMappingJogador));

            //MediatR
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(CreateJogadorHandler).Assembly));
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(CheckExistsJogadorHandler).Assembly));
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(GetJogadorHandler).Assembly));
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(GetAllJogadorHandler).Assembly));
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(UpdateJogadorHandler).Assembly));
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(UpdatePassJogadorHandler).Assembly));
            services.AddMediatR( cfg => cfg.RegisterServicesFromAssembly(typeof(DeleteJogadorHandler).Assembly));
        }
    }
}