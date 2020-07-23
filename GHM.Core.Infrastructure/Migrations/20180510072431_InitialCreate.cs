using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GHM.Core.Infrastructure.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApiResource",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true),
                    Enabled = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApiResource", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    ClientId = table.Column<string>(maxLength: 100, nullable: false),
                    AbsoluteRefreshTokenLifetime = table.Column<int>(nullable: false),
                    AccessTokenLifetime = table.Column<int>(nullable: false),
                    AccessTokenType = table.Column<int>(nullable: false),
                    AllowAccessTokensViaBrowser = table.Column<bool>(nullable: false),
                    AllowOfflineAccess = table.Column<bool>(nullable: false),
                    AllowPlainTextPkce = table.Column<bool>(nullable: false),
                    AllowRememberConsent = table.Column<bool>(nullable: false),
                    AlwaysIncludeUserClaimsInIdToken = table.Column<bool>(nullable: false),
                    AlwaysSendClientClaims = table.Column<bool>(nullable: false),
                    AuthorizationCodeLifetime = table.Column<int>(nullable: false),
                    BackChannelLogoutSessionRequired = table.Column<bool>(nullable: false),
                    BackChannelLogoutUri = table.Column<string>(nullable: true),
                    ClientAllowedGrantTypes = table.Column<string>(nullable: true),
                    ClientClaimsPrefix = table.Column<string>(nullable: true),
                    ClientName = table.Column<string>(maxLength: 450, nullable: false),
                    ClientUri = table.Column<string>(nullable: true),
                    ConsentLifetime = table.Column<int>(nullable: true),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    EnableLocalLogin = table.Column<bool>(nullable: false),
                    Enabled = table.Column<bool>(nullable: false),
                    FrontChannelLogoutSessionRequired = table.Column<bool>(nullable: false),
                    FrontChannelLogoutUri = table.Column<string>(nullable: true),
                    IdentityTokenLifetime = table.Column<int>(nullable: false),
                    IncludeJwtId = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    LogoUri = table.Column<string>(nullable: true),
                    PairWiseSubjectSalt = table.Column<string>(nullable: true),
                    ProtocolType = table.Column<string>(nullable: true),
                    RefreshTokenExpiration = table.Column<int>(nullable: false),
                    RefreshTokenUsage = table.Column<int>(nullable: false),
                    RequireClientSecret = table.Column<bool>(nullable: false),
                    RequireConsent = table.Column<bool>(nullable: false),
                    RequirePkce = table.Column<bool>(nullable: false),
                    SlidingRefreshTokenLifetime = table.Column<int>(nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 450, nullable: true),
                    UpdateAccessTokenClaimsOnRefresh = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.ClientId);
                });

            migrationBuilder.CreateTable(
                name: "ClientAllowedCorsOrigin",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClientId = table.Column<string>(maxLength: 100, nullable: false),
                    Domain = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientAllowedCorsOrigin", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClientAllowedScope",
                columns: table => new
                {
                    ClientId = table.Column<string>(maxLength: 100, nullable: false),
                    Scope = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientAllowedScope", x => new { x.ClientId, x.Scope });
                });

            migrationBuilder.CreateTable(
                name: "ClientClaim",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    ClientId = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientClaim", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClientIdentityProviderRestriction",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClientId = table.Column<string>(maxLength: 100, nullable: false),
                    IdentityProviderRestriction = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientIdentityProviderRestriction", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClientPostLogoutRedirectUris",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClientId = table.Column<string>(maxLength: 100, nullable: false),
                    Uri = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientPostLogoutRedirectUris", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClientProperty",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClientId = table.Column<string>(maxLength: 100, nullable: false),
                    Key = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientProperty", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClientRedirectUris",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClientId = table.Column<string>(maxLength: 100, nullable: false),
                    Uri = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientRedirectUris", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClientSecret",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClientId = table.Column<string>(maxLength: 100, nullable: false),
                    Description = table.Column<string>(maxLength: 4000, nullable: true),
                    Expiration = table.Column<DateTime>(nullable: true),
                    Type = table.Column<string>(maxLength: 4000, nullable: false),
                    Value = table.Column<string>(maxLength: 4000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientSecret", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "District",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Culture = table.Column<string>(maxLength: 100, nullable: false),
                    Name = table.Column<string>(maxLength: 150, nullable: false),
                    ProvinceId = table.Column<int>(nullable: false),
                    ProvinceName = table.Column<string>(maxLength: 150, nullable: false),
                    UnsignName = table.Column<string>(maxLength: 150, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_District", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IdentityResource",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true),
                    Emphasize = table.Column<bool>(nullable: false),
                    Enabled = table.Column<bool>(nullable: false),
                    Required = table.Column<bool>(nullable: false),
                    ShowInDiscoveryDocument = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentityResource", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "Languages",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 10, nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Languages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    BgColor = table.Column<string>(unicode: false, maxLength: 10, nullable: true),
                    ChildCount = table.Column<int>(nullable: false, defaultValue: 0),
                    Icon = table.Column<string>(unicode: false, maxLength: 50, nullable: true),
                    IdPath = table.Column<string>(unicode: false, nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    OrderItem = table.Column<int>(nullable: false),
                    OrderPath = table.Column<string>(nullable: true),
                    ParentId = table.Column<int>(nullable: true),
                    Url = table.Column<string>(unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PageTranslation",
                columns: table => new
                {
                    PageId = table.Column<int>(nullable: false),
                    LanguageId = table.Column<string>(unicode: false, maxLength: 10, nullable: false),
                    Description = table.Column<string>(nullable: true),
                    IsDelete = table.Column<bool>(nullable: false, defaultValue: false),
                    Name = table.Column<string>(maxLength: 250, nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageTranslation", x => new { x.PageId, x.LanguageId });
                });

            migrationBuilder.CreateTable(
                name: "Province",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 250, nullable: false),
                    NationalId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Province", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 50, nullable: false),
                    ConcurrencyStamp = table.Column<string>(maxLength: 50, nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 256, nullable: false),
                    NormalizedName = table.Column<string>(unicode: false, maxLength: 256, nullable: false),
                    TenantId = table.Column<string>(maxLength: 50, nullable: false),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RolesPages",
                columns: table => new
                {
                    RoleId = table.Column<string>(maxLength: 50, nullable: false),
                    PageId = table.Column<int>(nullable: false),
                    Permissions = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RolesPages", x => new { x.RoleId, x.PageId });
                });

            migrationBuilder.CreateTable(
                name: "Tenant",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 50, nullable: false),
                    Address = table.Column<string>(maxLength: 500, nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(maxLength: 500, nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Logo = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    Name = table.Column<string>(maxLength: 256, nullable: false),
                    Note = table.Column<string>(maxLength: 500, nullable: true),
                    PhoneNumber = table.Column<string>(maxLength: 50, nullable: false),
                    UnsignName = table.Column<string>(unicode: false, maxLength: 1000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tenant", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TenantLanguages",
                columns: table => new
                {
                    TenantId = table.Column<string>(maxLength: 50, nullable: false),
                    LanguageId = table.Column<string>(maxLength: 10, nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDefault = table.Column<bool>(nullable: false, defaultValue: false),
                    Name = table.Column<string>(maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TenantLanguages", x => new { x.TenantId, x.LanguageId });
                });

            migrationBuilder.CreateTable(
                name: "TenantsPages",
                columns: table => new
                {
                    TenantId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    PageId = table.Column<string>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TenantsPages", x => new { x.TenantId, x.PageId });
                });

            migrationBuilder.CreateTable(
                name: "UserAccounts",
                columns: table => new
                {
                    Id = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Avatar = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    ConcurrencyStamp = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    Email = table.Column<string>(unicode: false, maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    FullName = table.Column<string>(maxLength: 50, nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDelete = table.Column<bool>(nullable: false),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    NormalizedEmail = table.Column<string>(unicode: false, maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(unicode: false, maxLength: 256, nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(maxLength: 16, nullable: true),
                    PhoneNumber = table.Column<string>(unicode: false, maxLength: 20, nullable: false),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    SecurityStamp = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    TenantId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    UserName = table.Column<string>(unicode: false, maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAccounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserSettings",
                columns: table => new
                {
                    UserId = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    Key = table.Column<string>(unicode: false, maxLength: 256, nullable: false),
                    GroupKey = table.Column<string>(maxLength: 256, nullable: false),
                    Value = table.Column<string>(maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSettings", x => new { x.UserId, x.Key });
                });

            migrationBuilder.CreateTable(
                name: "RoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoleClaims_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserClaims_UserAccounts_UserId",
                        column: x => x.UserId,
                        principalTable: "UserAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_UserLogins_UserAccounts_UserId",
                        column: x => x.UserId,
                        principalTable: "UserAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UsersRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsersRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_UsersRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UsersRoles_UserAccounts_UserId",
                        column: x => x.UserId,
                        principalTable: "UserAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_UserTokens_UserAccounts_UserId",
                        column: x => x.UserId,
                        principalTable: "UserAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RoleClaims_RoleId",
                table: "RoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "Roles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "UserAccounts",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "UserAccounts",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserClaims_UserId",
                table: "UserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserLogins_UserId",
                table: "UserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UsersRoles_RoleId",
                table: "UsersRoles",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApiResource");

            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "ClientAllowedCorsOrigin");

            migrationBuilder.DropTable(
                name: "ClientAllowedScope");

            migrationBuilder.DropTable(
                name: "ClientClaim");

            migrationBuilder.DropTable(
                name: "ClientIdentityProviderRestriction");

            migrationBuilder.DropTable(
                name: "ClientPostLogoutRedirectUris");

            migrationBuilder.DropTable(
                name: "ClientProperty");

            migrationBuilder.DropTable(
                name: "ClientRedirectUris");

            migrationBuilder.DropTable(
                name: "ClientSecret");

            migrationBuilder.DropTable(
                name: "District");

            migrationBuilder.DropTable(
                name: "IdentityResource");

            migrationBuilder.DropTable(
                name: "Languages");

            migrationBuilder.DropTable(
                name: "Pages");

            migrationBuilder.DropTable(
                name: "PageTranslation");

            migrationBuilder.DropTable(
                name: "Province");

            migrationBuilder.DropTable(
                name: "RoleClaims");

            migrationBuilder.DropTable(
                name: "RolesPages");

            migrationBuilder.DropTable(
                name: "Tenant");

            migrationBuilder.DropTable(
                name: "TenantLanguages");

            migrationBuilder.DropTable(
                name: "TenantsPages");

            migrationBuilder.DropTable(
                name: "UserClaims");

            migrationBuilder.DropTable(
                name: "UserLogins");

            migrationBuilder.DropTable(
                name: "UserSettings");

            migrationBuilder.DropTable(
                name: "UsersRoles");

            migrationBuilder.DropTable(
                name: "UserTokens");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "UserAccounts");
        }
    }
}
