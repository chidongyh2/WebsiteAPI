FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
ENV ASPNETCORE_URLS http://*:50004
EXPOSE 50004

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["GHM.Notifications.Api/GHM.Notifications.Api.csproj", "GHM.Notifications.Api/"]
COPY ["GHM.Events/GHM.Events.csproj", "GHM.Events/"]
COPY ["GHM.EventBus/GHM.EventBus.csproj", "GHM.EventBus/"]
COPY ["GHM.Infrastructure/GHM.Infrastructure.csproj", "GHM.Infrastructure/"]
COPY ["GHM.EventBusRabbitMQ/GHM.EventBusRabbitMQ.csproj", "GHM.EventBusRabbitMQ/"]
COPY ["GHM.Infrastructure.SqlServer/GHM.Infrastructure.SqlServer.csproj", "GHM.Infrastructure.SqlServer/"]
#RUN dotnet restore "GHM.Notifications.Api/GHM.Notifications.Api.csproj"
COPY . .
#WORKDIR "/src/GHM.Notifications.Api"
#RUN dotnet build "GHM.Notifications.Api.csproj" -c Release -o /app/build
#
FROM build AS publish
RUN dotnet publish "GHM.Notifications.Api/GHM.Notifications.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.Notifications.Api.dll"]
