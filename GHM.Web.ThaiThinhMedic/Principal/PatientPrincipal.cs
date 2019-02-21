using System.Security.Principal;

namespace GHM.Web.ThaiThinhMedic.Principal
{
    public class PatientPrincipal : IPrincipal
    {
        public IIdentity Identity { get; private set; }

        public bool IsInRole(string role)
        {
            short roleId;
            if (short.TryParse(role, out roleId))
            {
                return roleId == RoleId;
            }
            return false;
        }

        public PatientPrincipal(string username)
        {
            Identity = new GenericIdentity(username);
        }

        public string UserId { get; set; }

        public short RoleId { get; set; }
    }
}