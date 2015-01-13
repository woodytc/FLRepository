﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using KTBLeasing.FrontLeasing.Domain;
using KTBLeasing.Domain;

namespace KTBLeasing.FrontLeasing.Mapping.Orcl.Reposotory
{
    public interface IAddressRepository
    {
        void Insert(Address entity);
        List<Address> GetAll();
        List<Address> GetAllWithOrderBy(string orderby);
        /// <summary>
        /// [20150113] Thawatchai.t 
        /// Get Addresss view tab customer
        ///
        /// </summary>
        /// <param name="start"></param>
        /// <param name="limit"></param>
        /// <returns></returns>
        List<AddressViewModel> GetAll(int start, int limit);
        int Count();
        List<Address> Find(int start, int limit, string text);
        int Count(string text);
    }
    public class AddressRepository : NhRepository, IAddressRepository
    {
        
        public void Insert(Address entity)
        {
            using (var session = SessionFactory.OpenSession())
            using (var ts = session.BeginTransaction())
            {
                session.Save(entity);
                ts.Commit();
            }

        }

        public List<Address> GetAll()
        {
            using (var session = SessionFactory.OpenSession())
            {
                return session.QueryOver<Address>().List<Address>() as List<Address>;
                
                return this.ExecuteICriteria<Address>() as List<Address>;
            }
        }

        public List<Address> GetAllWithOrderBy(string orderby)
        {
            return this.ExecuteICriteriaOrderBy<Address>(new Address(), orderby) as List<Address>;
        }

        //public List<Address> GetAll(int start, int limit)
        //{
        //    using (var session = SessionFactory.OpenSession())
        //    {
        //        var result = session.QueryOver<Address>().Skip(start).Take(limit);
        //        return result.List<Address>() as List<Address>;
        //    }
        //}
        /// <summary>
        /// [20150113] Thawatchai.t 
        /// Get Addresss view tab customer
        ///  
        /// </summary>
        /// <param name="start"></param>
        /// <param name="limit"></param>
        /// <returns></returns>
        public List<AddressViewModel> GetAll(int start, int limit)
        {
            using (var session = SessionFactory.OpenSession())
            {
                var result = (from x in session.QueryOver<Address>().List()
                              join y in session.QueryOver<Province>().List()
                              on x.SubdistrictId equals y.SubdistrictId
                              select (new AddressViewModel
                              {
                                  AddressEng = x.AddressEng,
                                  AddressTh = x.AddressTh,
                                  CompanyId = x.CustomerId,
                                  DistrictId = y.DistrictId,
                                  DistrictName = y.DistrictName,
                                  Id = x.Id,
                                  ProvinceId = y.ProvinceId,
                                  ProvinceName = y.ProvinceName,
                                  Remark = x.Remark,
                                  SubdistrictId = y.SubdistrictId,
                                  SubdistrictName = y.SubdistrictName,
                                  Zipcode = y.Zipcode,
                                  DisplayProvince = string.Format("{0} {1} {2} {3}",y.ProvinceName,y.DistrictName,y.SubdistrictName,y.Zipcode)

                              })
                             ).ToList<AddressViewModel>();

                return result as List<AddressViewModel>;

                
            }
        }

        public int Count()
        {
            using (var session = SessionFactory.OpenSession())
            {
                var result = session.QueryOver<Address>().RowCount();
                session.Close();
                return result;
            }
        }

        //find searech
        public List<Address> Find(int start, int limit, string text)
        {
            using (var session = SessionFactory.OpenSession())
            {
                //var result = (from x in session.QueryOver<Address>().List<Address>() where x.AddressTh.Contains(text) select x).Skip(start).Take(limit);
                var result = session.QueryOver<Address>().List<Address>().Where(w => w.AddressTh.Contains(text) || w.AddressEng.Contains(text)).Skip(start).Take(limit);
                session.Close();
                return result.ToList<Address>();

            }
        }

        public int Count(string text)
        {
            using (var session = SessionFactory.OpenSession())
            {
                var result = session.QueryOver<Address>().List<Address>().Where(w => w.AddressTh.Contains(text) || w.AddressEng.Contains(text));
                session.Close();
                return result.ToList<Address>().Count;
            }
        }
    }
}