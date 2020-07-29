FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /src
COPY ["GHM.Website.Event.Api/GHM.Website.Event.Api.csproj", "GHM.Website.Event.Api/"]
COPY ["GHM.Website_Event.Domain/GHM.Website.Event.Domain.csproj", "GHM.Website_Event.Domain/"]
COPY ["GHM.Infrastructure/GHM.Infrastructure.csproj", "GHM.Infrastructure/"]
COPY ["GHM.Website_Event.Infrastructure/GHM.Website.Event.Infrastructure.csproj", "GHM.Website_Event.Infrastructure/"]
COPY ["GHM.Events/GHM.Events.csproj", "GHM.Events/"]
COPY ["GHM.EventBus/GHM.EventBus.csproj", "GHM.EventBus/"]
COPY ["GHM.Infrastructure.SqlServer/GHM.Infrastructure.SqlServer.csproj", "GHM.Infrastructure.SqlServer/"]
#RUN dotnet restore "GHM.Website.Event.Api/GHM.Website.Event.Api.csproj"
COPY . .
#WORKDIR "/src/GHM.Website.Event.Api"
#RUN dotnet build "GHM.Website.Event.Api.csproj" -c Release -o /app/build
#
FROM build AS publish
RUN dotnet publish "GHM.Website.Event.Api/GHM.Website.Event.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.Website.Event.Api.dll"]
