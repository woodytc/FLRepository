﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FluentNHibernate.Mapping;
using KTBLeasing.Domain;

namespace KTBLeasing.FrontLeasing.Mapping.Orcl
{
    /// <summary>
    /// user for View in grid userinfo
    /// </summary>
    public class UserInformationViewMap : ClassMap<UserInformationView>
    {

        public UserInformationViewMap()
        {
            Table("USER_INFORMATION");
            LazyLoad();

            Id(x => x.Id, "ID").GeneratedBy.Sequence("SEQ_ADDRESS");
            References(x => x.UsersAuthorize).Column("USER_ID");
            References(x => x.TitleNameTh).Column("TITLE_NAME_TH").Not.Nullable();
            References(x => x.TitleNameEng).Column("TITLE_NAME_ENG");
            Map(x => x.FirstNameTh).Column("FIRST_NAME_TH");
            Map(x => x.LastNameTh).Column("LAST_NAME_TH");
            Map(x => x.FirstNameEng).Column("FIRST_NAME_ENG");
            Map(x => x.LastNameEng).Column("LAST_NAME_ENG");
            References(x => x.Position).Column("POSITION").Not.Nullable();
            References(x => x.MarketingGroup).Column("MARKETING_GROUP").Not.Nullable();
            Map(x => x.MarketingCode).Column("MARKETING_CODE");
            Map(x => x.CreateDate).Column("CREATE_DATE");
            Map(x => x.UpdateDate).Column("UPDATE_DATE");
            Map(x => x.CreateBy).Column("CREATE_BY");
            Map(x => x.UpdateBy).Column("UPDATE_BY");
            References(x => x.DepartmentCode).Column("DEPARMENT_CODE");
        }
    }
}
