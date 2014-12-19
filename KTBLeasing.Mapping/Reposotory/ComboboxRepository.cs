﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using KTBLeasing.FrontLeasing.Domain;
using System.Collections;
using NHibernate.Transform;

namespace KTBLeasing.FrontLeasing.Mapping.Orcl.Reposotory
{
    public interface IComboboxRepository
    {
        List<Province> GetProvince();
        int Count();
    }
    public class ComboboxRepository : NhRepository, IComboboxRepository
    {
        public List<Province> GetProvince()
        {
            using (var session = SessionFactory.OpenSession())
            using (var ts = session.BeginTransaction())
            {
                var result = session.QueryOver<Province>().List();
                
                return result as List<Province>;
            }
        }

        public int Count()
        {
            using(var session = SessionFactory.OpenSession())
            {
                var result =  session.QueryOver<CommonData>().RowCount();
                session.Close();
                return result;
            }
        }
    }
}
