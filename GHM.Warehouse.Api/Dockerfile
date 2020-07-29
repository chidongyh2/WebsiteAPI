FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /src
COPY ["GHM.Warehouse.Api/GHM.Warehouse.Api.csproj", "GHM.Warehouse.Api/"]
COPY ["GHM.Infrastructure/GHM.Infrastructure.csproj", "GHM.Infrastructure/"]
COPY ["GHM.Warehouse.Domain/GHM.Warehouse.Domain.csproj", "GHM.Warehouse.Domain/"]
COPY ["GHM.EventBusRabbitMQ/GHM.EventBusRabbitMQ.csproj", "GHM.EventBusRabbitMQ/"]
COPY ["GHM.EventBus/GHM.EventBus.csproj", "GHM.EventBus/"]
COPY ["GHM.Warehouse.Infrastructure/GHM.Warehouse.Infrastructure.csproj", "GHM.Warehouse.Infrastructure/"]
COPY ["GHM.Events/GHM.Events.csproj", "GHM.Events/"]
COPY ["GHM.Infrastructure.SqlServer/GHM.Infrastructure.SqlServer.csproj", "GHM.Infrastructure.SqlServer/"]
#RUN dotnet restore "GHM.Warehouse.Api/GHM.Warehouse.Api.csproj"
COPY . .
#WORKDIR "/src/GHM.Warehouse.Api"
#RUN dotnet build "GHM.Warehouse.Api.csproj" -c Release -o /app/build
#
FROM build AS publish
RUN dotnet publish "GHM.Warehouse.Api/GHM.Warehouse.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.Warehouse.Api.dll"]
