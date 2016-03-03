﻿using System;
using System.Collections.Generic;
using log4net;
using System.Reflection;
using KTBLeasing.FrontLeasing.Domain;
using NHibernate.Criterion;
using KTBLeasing.Domain.ViewCommonData;
using NHibernate.Transform;


namespace KTBLeasing.FrontLeasing.Mapping.Orcl.Reposotory
{
    public interface ICustomerRepository
    {
        Customer GetById(int id);
        List<Customer> Get(int start, int limit, long id);
        List<CommonCustomerDomain> Get(int start, int limit, List<FilterModel> filter);
        int Count(int start, int limit, long id);
        List<Customer> GetAll();
        List<CommonCustomerDomain> GetWihtPage(int start, int limit);
        List<Customer> Find(int start, int limit, string text, int type);
        List<Background> GetBackground(long id);
        int Count();
        int Count(List<FilterModel> filter);
        object Insert<T>(T entity);
        bool Update<T>(T entity);
        bool SaveOrUpdate<T>(T entity);
        void Delete<T>(T entity);
    }
    public class CustomerRepository : NhRepository, ICustomerRepository
    {
        private static readonly ILog Logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        
        

        public Customer GetById(int id)
        {
            using(var session = SessionFactory.OpenStatelessSession())
            using (var ts = session.BeginTransaction())
            {
                try
                {
                    var result = session.Get<Customer>(id);
                    //var result = session.QueryOver<Customer>().List().Where(x => x.Id == id);
                    //var result1 = session.CreateCriteria(typeof(Customer));
                    //result1.Add(
                    return result;
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                    return null;
                }
            }
        }

        public List<Customer> Get(int start, int limit, long id)
        {
            using (var session = SessionFactory.OpenStatelessSession())
            using (var ts = session.BeginTransaction())
            {
                try
                {
                    List<Customer> list = new List<Customer>();
                    var result = session.Get<Customer>(id);
                    list.Add(result);

                    return list;
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                    return null;
                }
            }
        }

        private Conjunction GetCriteriaParameter(List<FilterModel> filter)
        {
            Conjunction conj = new Conjunction();

            foreach (var item in filter)
            {
                switch (item.type)
                {
                    case "number":
                        if (item.property == "Id")
                        {
                            conj.Add(Restrictions.Eq(item.property, Convert.ToInt64(item.value)));
                        }
                        else
                        {
                            conj.Add(Restrictions.Eq(item.property, Convert.ToInt32(item.value)));
                        }
                        break;
                    case "string":
                        conj.Add(Restrictions.Like(item.property, string.Format("%{0}%", item.value)));
                        break;
                    case "date":
                        if (item.property == "StartDate")
                        {
                            conj.Add(Restrictions.Ge("ApproveDate", Convert.ToDateTime(item.value)));
                        }
                        else if (item.property == "EndDate")
                        {
                            conj.Add(Restrictions.Le("ApproveDate", Convert.ToDateTime(item.value)));
                        }
                        break;
                }
            }

            return conj;
        }

        public List<CommonCustomerDomain> Get(int start, int limit, List<FilterModel> filter)
        {
            using (var session = SessionFactory.OpenStatelessSession())
            using (var ts = session.BeginTransaction())
            {
                try
                {
                    Conjunction conj = this.GetCriteriaParameter(filter);

                    var result = session.QueryOver<CommonCustomerDomain>()
                        .And(Restrictions.Conjunction().Add(conj))
                        .OrderBy(x => x.FirstNameTh).Asc
                        .Skip(start).Take(limit)
                        .List<CommonCustomerDomain>() as List<CommonCustomerDomain>;

                    return result;
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                    return null;
                }
            }
        }

        public int Count(int start, int limit, long id)
        {
            using (var session = SessionFactory.OpenStatelessSession())
            using (var ts = session.BeginTransaction())
            {
                try
                {
                    var result = session.QueryOver<Customer>()
                        .Skip(start).Take(limit)
                        .List<Customer>().Count;

                    return result;
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                    return 0;
                }
            }
        }

        public List<Customer> GetAll()
        {
            using (var session = SessionFactory.OpenStatelessSession())
            {
                try
                {
                    return session.QueryOver<Customer>().List<Customer>() as List<Customer>;
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                    return null;
                }
            }
        }

        public List<CommonCustomerDomain> GetWihtPage(int start, int limit)
        {
            using (var session = SessionFactory.OpenStatelessSession())
            {
                try
                {
                    var result = session.QueryOver<CommonCustomerDomain>()
                        .OrderBy(x => x.FirstNameTh).Asc
                        .Skip(start).Take(limit)
                        .List<CommonCustomerDomain>() as List<CommonCustomerDomain>;

                    return result;
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                    return null;
                }
            }
            
        }

        public int Count()
        {
            using (var session = SessionFactory.OpenStatelessSession())
            {
                try
                {
                    var result = session.QueryOver<CommonCustomerDomain>().RowCount();

                    return result;
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                    return 0;
                }
            }

        }

        public int Count(List<FilterModel> filter)
        {
            using (var session = SessionFactory.OpenStatelessSession())
            using (var ts = session.BeginTransaction())
            {
                try
                {
                    Conjunction conj = this.GetCriteriaParameter(filter);

                    var result = session.QueryOver<CommonCustomerDomain>()
                        .And(Restrictions.Conjunction().Add(conj))
                        .RowCount();

                    return result;
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                    return 0;
                }
            }
        }

        public List<Background> GetBackground(long id)
        {
            try
            {
                using (var session = SessionFactory.OpenSession())
                {
                    return session.QueryOver<Background>()
                        .Fetch(x => x.Customer).Eager.TransformUsing(new DistinctRootEntityResultTransformer())
                        .Where(x => x.Customer.Id == id)
                        .OrderBy(x => x.Id).Asc
                        .List<Background>() as List<Background>;

                    //return session.QueryOver<Background>()
                    //    .Fetch(x => x.InformationIndication).Eager
                    //    .Fetch(x => x.InformationIndication.Job).Eager
                    //    .Fetch(x => x.InformationIndication.Job.Customer).Eager
                    //    .Fetch(x => x.InformationIndication.Job.MarketingOfficer).Eager
                    //    .Fetch(x => x.InformationIndication.Job.MarketingOfficer.UsersAuthorize).Eager
                    //    .Fetch(x => x.InformationIndication.VisitInformationDomain).Eager
                    //    .Fetch(x => x.InformationIndication.VisitInformationDomain.Job).Eager
                    //    .Fetch(x => x.InformationIndication.VisitInformationDomain.Job.Customer).Eager
                    //    .Fetch(x => x.InformationIndication.VisitInformationDomain.Job.MarketingOfficer).Eager
                    //    .Fetch(x => x.InformationIndication.VisitInformationDomain.Job.MarketingOfficer.UsersAuthorize).Eager
                    //    .Where(x => x.InformationIndication.Id == id)
                    //    .OrderBy(x => x.Id).Asc
                    //    .List<Background>() as List<Background>;
                }
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return null;
            }
        }

        public List<Customer> Find(int start, int limit, string text,int type)
        {
            using (var session = SessionFactory.OpenSession())
            {
                //var result = session.QueryOver<Customer>().Where(
                //    Restrictions.Like("NameTh", text) ||
                //    Restrictions.Like("NameEng", text)
                //    ).List<Customer>().Skip(start).Take(limit);
                var criteria = session.CreateCriteria(typeof(Customer));
                switch (type)
                {
                    case 0:
                        int value;
                        if(int.TryParse(text,out value)){
                        criteria.Add(Expression.Eq("Id", value));
                        }
                        break;
                    case 1:
                        criteria.Add(Expression.Like("NameEng", text));
                        break;
                    case 2:
                        criteria.Add(Expression.Like("NameTh", text));
                        break;
                }
                
                session.Close();
                return criteria.List<Customer>() as List<Customer>;

            }
        }

        public object Insert<T>(T entity)
        {
            try
            {
                return base.Insert<T>(entity);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return null;
            }
        }

        public bool Update<T>(T entity)
        {
            try
            {
                base.Update<T>(entity);
                return true;
            }
            catch (Exception e)
            {
                Logger.Error(e);
                return false;
            }

        }

        public bool SaveOrUpdate<T>(T entity)
        {
            try
            {
                //var result = this.GetById((int)entity.Id);
                //if (result != null)
                //{
                //    this.Update(entity);
                //}
                //else
                //{
                //    this.Insert(entity);
                //}

                base.SaveOrUpdate<T>(entity);

                return true;
            }
            catch (Exception e)
            {
                Logger.Error(e);
                return false;
            }
        }

        public void Delete<T>(T entity)
        {
            using (var session = SessionFactory.OpenSession())
            {
                base.Delete<T>(entity);
            }
        }
    }
}
