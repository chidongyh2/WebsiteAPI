#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["GHM.Authentication/GHM.Authentication.csproj", "GHM.Authentication/"]
COPY ["GHM.Infrastructure/GHM.Infrastructure.csproj", "GHM.Infrastructure/"]
COPY ["GHM.Core.Domain/GHM.Core.Domain.csproj", "GHM.Core.Domain/"]
COPY ["GHM.Infrastructure.SqlServer/GHM.Infrastructure.SqlServer.csproj", "GHM.Infrastructure.SqlServer/"]
COPY ["GHM.Core.Api/GHM.Core.Api.csproj", "GHM.Core.Api/"]
COPY ["GHM.Events/GHM.Events.csproj", "GHM.Events/"]
COPY ["GHM.EventBus/GHM.EventBus.csproj", "GHM.EventBus/"]
COPY ["GHM.EventBusRabbitMQ/GHM.EventBusRabbitMQ.csproj", "GHM.EventBusRabbitMQ/"]
COPY ["GHM.Core.Infrastructure/GHM.Core.Infrastructure.csproj", "GHM.Core.Infrastructure/"]
RUN dotnet restore "GHM.Authentication/GHM.Authentication.csproj"
COPY . .
WORKDIR "/src/GHM.Authentication"
RUN dotnet build "GHM.Authentication.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GHM.Authentication.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.Authentication.dll"]