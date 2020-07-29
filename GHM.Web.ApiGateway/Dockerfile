#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /src
COPY ["GHM.Web.ApiGateway/GHM.Web.ApiGateway.csproj", "GHM.Web.ApiGateway/"]
RUN dotnet restore "GHM.Web.ApiGateway/GHM.Web.ApiGateway.csproj"
COPY . .
WORKDIR "/src/GHM.Web.ApiGateway"
RUN dotnet build "GHM.Web.ApiGateway.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GHM.Web.ApiGateway.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.Web.ApiGateway.dll"]