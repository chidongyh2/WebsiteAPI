#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /src
COPY ["GHM.WebSite.Nelly/GHM.WebSite.Nelly.csproj", "GHM.WebSite.Nelly/"]
COPY ["GHM.Infrastructure/GHM.Infrastructure.csproj", "GHM.Infrastructure/"]
COPY ["GHM.WebsiteClient.Api/GHM.WebsiteClient.Api.csproj", "GHM.WebsiteClient.Api/"]
RUN dotnet restore "GHM.WebSite.Nelly/GHM.WebSite.Nelly.csproj"
COPY . .
WORKDIR "/src/GHM.WebSite.Nelly"
RUN dotnet build "GHM.WebSite.Nelly.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GHM.WebSite.Nelly.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.WebSite.Nelly.dll"]