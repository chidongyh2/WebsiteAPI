FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
ENV ASPNETCORE_URLS http://*:9000
EXPOSE 9000

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["GHM.WebSite.Truck/GHM.WebSite.Truck.csproj", "GHM.WebSite.Truck/"]
COPY ["GHM.Infrastructure/GHM.Infrastructure.csproj", "GHM.Infrastructure/"]
COPY ["GHM.WebsiteClient.Api/GHM.WebsiteClient.Api.csproj", "GHM.WebsiteClient.Api/"]
#RUN dotnet restore "GHM.WebSite.Truck/GHM.WebSite.Truck.csproj"
COPY . .
#WORKDIR "/src/GHM.WebSite.Truck"
#RUN dotnet build "GHM.WebSite.Truck.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GHM.WebSite.Truck/GHM.WebSite.Truck.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GHM.WebSite.Truck.dll"]
