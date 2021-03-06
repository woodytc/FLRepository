﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using KTBLeasing.FrontLeasing.Domain;
using KTBLeasing.FrontLeasing.Mapping.Orcl.Reposotory;
using KTBLeasing.FrontLeasing.Models;
using Newtonsoft.Json;

namespace KTBLeasing.FrontLeasing.Controllers
{
    public class SetupController : ApiController
    {
        //private CommonAddressRepository commonAddressRepository { get; set; }

        //private static List<CommonAddress> CommonAddressList { get; set; }
        //private SetupController()
        //{
        //    if (CommonAddressList == null)
        //    {
        //        CommonAddressList = new List<CommonAddress>();
        //    }
        //}

        //// GET api/user

        ////Search
        //public CommonAddressModel Get(string text, int page, int start, int limit)
        //{
        //    CommonAddressModel view = new CommonAddressModel();
        //    try
        //    {
        //        if (!string.IsNullOrEmpty(text))
        //        {
        //            //var result = commonAddressRepository.Find(start, limit, text);
        //            //view.items = result;
        //            //view.totalProperty = commonAddressRepository.Count(text);
        //        }
        //        else
        //        {
        //            view = this.Get(page, start, limit);
        //        }

        //        return view;//result.Select(x => new { x.Id, x.Role.RoleName, RoleID = x.Role.Id, x.UsersAuthorize.UserId }).ToList();
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }
        //}

        ////frist page load
        //public CommonAddressModel Get(int page, int start, int limit)
        //{
        //    CommonAddressModel view = new CommonAddressModel();
        //    try
        //    {
        //        //var result = commonAddressRepository.GetAll(start, limit);
        //        //view.items = result;
        //        //view.totalProperty = commonAddressRepository.Count();
        //        //var a = result.Select(x => new { x.Id, x.Role.RoleName, x.UsersAuthorize.UserId }).ToList();
        //        return view;//result.Select(x => new { x.Id, x.Role.RoleName, x.UsersAuthorize.DepCode }).ToList();
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }
        //}

        
        ///** [20141208] Thawatchai.T edit data and add parameter string support grid tree **/
        ///// <summary>
        /////  edit to blind data to grid tree 
        /////  TODO: change IsLeaf to leaf
        ///// </summary>
        ///// <param name="node"></param>
        ///// <returns></returns>
        // // GET api/user/5
        //public List<object> Get(string node)
        //{
        //    try
        //    {
        //        SetCommonAddressData();

        //        if (node.Equals("root"))
        //            return CommonAddressList.Where(w => w.Parent_Id == 0).Distinct().ToList<Object>();
        //        else 
        //        {
        //            var list = CommonAddressList.Where(w => w.Parent_Id == int.Parse(node)).ToList<CommonAddress>();
        //            return list.Select(x => new { x.Id, leaf = x.IsLeaf, x.Levels, x.Name, x.Parent_Id }).ToList<Object>();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }
        //}

        ////public List<object> GetRoot()
        ////{
        ////    try
        ////    {
        ////        SetCommonAddressData();

        ////        if (node.Equals("root"))
        ////            return CommonAddressList.Where(w => w.Parent_Id == 0).Distinct().ToList<Object>();
        ////        else
        ////        {
        ////            var list = CommonAddressList.Where(w => w.Parent_Id == int.Parse(node)).ToList<CommonAddress>();
        ////            return list.Select(x => new { x.Id, leaf = x.IsLeaf, x.Levels, x.Name, x.Parent_Id }).ToList<Object>();
        ////        }
        ////    }
        ////    catch (Exception ex)
        ////    {
        ////        throw new Exception(ex.Message);
        ////    }
        ////}

        //private void SetCommonAddressData()
        //{
        //    if (CommonAddressList.Count <= 0)
        //    {
        //        //CommonAddressList.Union<CommonAddress>(commonAddressRepository.Get());
        //        CommonAddressList = commonAddressRepository.Get();
        //        //CommonAddressList.Concat(commonAddressRepository.GetRootNode());
        //    }
        //}

        ////add by woody
        //// POST api/user
        //public CommonAddress Post(CommonAddress formmodel)
        //{
        //    this.commonAddressRepository.Insert(formmodel);
        //    return formmodel;
        //}

        ////Post api/user
        //public CommonAddress Post()
        //{
        //    //return commonAddressRepository.Get();
        //    return null;
        //}

        //// PUT api/user/5
        //public void Put(long Id, object modified)
        //{
        //    //var oldRecord = this.Get(Id);
        //    //var entity = new object();
        //    ////if count >0 update data else insert data
        //    //if (oldRecord.Count > 0)
        //    //{
        //    //    oldRecord[0].Role.Id = modified.RoleName;
        //    //    entity = oldRecord.FirstOrDefault() as CommonAddressModel;
        //    //}
        //    //else
        //    //{
        //    //    CommonAddressModel newRecord = new CommonAddressModel();
        //    //    newRecord.Role.Id = modified.RoleName;
        //    //    newRecord.UsersAuthorize.UserId = modified.UserId;
        //    //    entity = newRecord;
        //    //}
        //    //this.commonAddressRepository.SaveOrUpdate(entity);
        //}

        //// DELETE api/user/5
        //public void Delete(int Id, CommonAddress modified)
        //{
        //    //var oldRecord = this.Get(Id);
        //    //var entity = oldRecord.FirstOrDefault() as CommonAddressModel;
        //    //this.commonAddressRepository.Delete<CommonAddressModel>(entity);
        //}

    }
}
