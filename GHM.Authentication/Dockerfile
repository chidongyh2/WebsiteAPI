FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
ENV ASPNETCORE_URLS http://*:50000
EXPOSE 50000

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
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
#RUN dotnet restore "GHM.Authentication/GHM.Authentication.csproj"
COPY . .
#WORKDIR "/src/GHM.Authentication"
#RUN dotnet build "GHM.Authentication.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GHM.Authentication/GHM.Authentication.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.Authentication.dll"]
