using System; 
using System.Collections.Generic; 
using System.Text; 
using FluentNHibernate.Mapping;
using KTBLeasing.FrontLeasing.Domain;
using KTBLeasing.FrontLeasing;

namespace KTBLeasing.FrontLeasing.Mapping.Orcl {


    public class ARCardMap : ClassMap<ARCard>
    {
        public ARCardMap()
        {
            Table("ARCARD");
            LazyLoad();
            Id(x => x.Agreement, "AGREEMENT").GeneratedBy.Assigned();
            //References(x => x.ApplicationDetail).Column("APP_ID");
            Map(x => x.Customer).Column("CUSTOMER").Length(20);
            Map(x => x.RestructureDate).Column("RESTRUCTURE_DATE").CustomSqlType("date");
            Map(x => x.OS_PR).Column("OS_PR");
            Map(x => x.FlatRate).Column("FLAT_RATE");
            Map(x => x.Interest).Column("INTEREST");
            Map(x => x.UnpaidVAT).Column("UNPAID_VAT");
            Map(x => x.Penalty).Column("PENALTY");
            Map(x => x.DebitNote).Column("DEBIT_NOTE");
            Map(x => x.NewFlatRate).Column("NEW_FLAT_RATE");
            Map(x => x.NewFirstDueDate).Column("NEW_FIRST_DUE_DATE").CustomSqlType("date");
            Map(x => x.SubsequentDueDay).Column("SUBSEQUENT_DUE_DAY");
            Map(x => x.NewTerm).Column("NEW_TERM");
        }
    }
}
