#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /src
COPY ["GHM.Website.Api/GHM.Website.Api.csproj", "GHM.Website.Api/"]
COPY ["GHM.Infrastructure/GHM.Infrastructure.csproj", "GHM.Infrastructure/"]
COPY ["GHM.Website.Domain/GHM.Website.Domain.csproj", "GHM.Website.Domain/"]
COPY ["GHM.Website.Infrastructure/GHM.Website.Infrastructure.csproj", "GHM.Website.Infrastructure/"]
COPY ["GHM.Events/GHM.Events.csproj", "GHM.Events/"]
COPY ["GHM.EventBus/GHM.EventBus.csproj", "GHM.EventBus/"]
COPY ["GHM.Infrastructure.SqlServer/GHM.Infrastructure.SqlServer.csproj", "GHM.Infrastructure.SqlServer/"]
COPY ["GHM.FileManagement.Domain/GHM.FileManagement.Domain.csproj", "GHM.FileManagement.Domain/"]
RUN dotnet restore "GHM.Website.Api/GHM.Website.Api.csproj"
COPY . .
WORKDIR "/src/GHM.Website.Api"
RUN dotnet build "GHM.Website.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GHM.Website.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.Website.Api.dll"]
