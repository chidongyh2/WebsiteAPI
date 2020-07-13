#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["GHM.FileManagement.Api/GHM.FileManagement.Api.csproj", "GHM.FileManagement.Api/"]
COPY ["GHM.FileManagement.Infrastructure/GHM.FileManagement.Infrastructure.csproj", "GHM.FileManagement.Infrastructure/"]
COPY ["GHM.Infrastructure/GHM.Infrastructure.csproj", "GHM.Infrastructure/"]
COPY ["GHM.Infrastructure.SqlServer/GHM.Infrastructure.SqlServer.csproj", "GHM.Infrastructure.SqlServer/"]
COPY ["GHM.FileManagement.Domain/GHM.FileManagement.Domain.csproj", "GHM.FileManagement.Domain/"]
RUN dotnet restore "GHM.FileManagement.Api/GHM.FileManagement.Api.csproj"
COPY . .
WORKDIR "/src/GHM.FileManagement.Api"
RUN dotnet build "GHM.FileManagement.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GHM.FileManagement.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.FileManagement.Api.dll"]
