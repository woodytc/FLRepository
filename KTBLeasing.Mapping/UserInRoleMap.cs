using System; 
using System.Collections.Generic; 
using System.Text; 
using FluentNHibernate.Mapping;
using KTBLeasing.FrontLeasing.Domain; 

namespace KTBLeasing.FrontLeasing.Mapping.Orcl {
    
    
    public class UserInRoleMap : ClassMap<UserInRole> {
        
        public UserInRoleMap() {
			Table("USER_IN_ROLE");
			LazyLoad();
			Id(x => x.Id).GeneratedBy.Assigned().Column("ID");
			References(x => x.Role).Column("ROLEID");
			References(x => x.UsersAuthorize).Column("USER_ID");
        }
    }
}
