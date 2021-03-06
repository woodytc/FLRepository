﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using KTBLeasing.FrontLeasing.Mapping.Orcl.Reposotory;
using KTBLeasing.FrontLeasing.Domain;
using KTBLeasing.Domain;
using KTBLeasing.FrontLeasing.Models;
using log4net;
using System.Reflection;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace KTBLeasing.FrontLeasing.Controllers
{
    public class UserInfoController : ApiController
    {
        private static readonly ILog Logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        private IUserInfomationRepository UserInfomationRepository { get; set; }
        // GET api/userinfo
        //public List<UserInformationView> Get(
        public JArray Get()
        {
            /** [20150327] Add by Woody change return to dynamic object. **/
            var view = UserInfomationRepository.GetAllView();
            var jarr =view.ToArray<Object>();
            string jsonString = JsonConvert.SerializeObject(view);
            JArray result = JArray.Parse(jsonString) as JArray;

            return result;
            
            //return view;
        }

        // GET api/userinfo/5
        public string Get(int id) 
        {
            return "value";
        }

        //// POST api/userinfo
        //public void Post([FromBody]string value)
        //{
        //    value += value;
        //}

        // POST api/userinfo
        //public string DoPost(UserInformation value)
        public bool DoPost(UserInfoModel userinfomodel)
        {
            try
            {
                if (string.IsNullOrEmpty(userinfomodel.UserId))
                {
                    //new
                    string userId = string.Format("{0}_{1}", userinfomodel.FirstNameEng, userinfomodel.LastNameEng.Substring(0, 2)).ToLower();
                    var entity = new UserInformation
                    {

                        UsersAuthorize = new UsersAuthorize
                        {
                            Active = 1,
                            DepCode = "NA",
                            UserId = userId,
                        },
                        //name eng
                        TitleNameEng = userinfomodel.TitleNameEng,
                        FirstNameEng = userinfomodel.FirstNameEng,
                        LastNameEng = userinfomodel.LastNameEng,

                        //name thai
                        TitleNameTh = userinfomodel.IdTitleName,
                        FirstNameTh = userinfomodel.FirstNameTh,
                        LastNameTh = userinfomodel.LastNameTh,

                        //group code
                        Position = userinfomodel.PositionId,
                        MarketingCode = userinfomodel.MarketingCode,
                        MarketingGroup = userinfomodel.MarketingGroupId,
                        DepartmentCode = userinfomodel.DepartmentCode,

                        //base
                        CreateBy = "Joshua",
                        UpdateBy = "Joshua",
                        CreateDate = DateTime.Now,
                        UpdateDate = DateTime.Now
                    };

                    UserInfomationRepository.Save(entity);
                }
                else
                {
                    //update
                    var result = UserInfomationRepository.Get(userinfomodel.UserId);

                    result.UpdateDate = DateTime.Now;
                    //Note: get by current session 
                    result.UpdateBy = "admin";
                    //ref common data
                    result.MarketingCode = userinfomodel.MarketingCode;
                    result.MarketingGroup = userinfomodel.MarketingGroupId;
                    result.Position = userinfomodel.PositionId;
                    result.DepartmentCode = userinfomodel.DepartmentCode;
                    //name eng
                    result.TitleNameEng = userinfomodel.TitleNameEng;
                    result.FirstNameEng = userinfomodel.FirstNameEng;
                    result.LastNameEng = userinfomodel.LastNameEng;
                    //name thai
                    result.TitleNameTh = userinfomodel.IdTitleName;
                    result.FirstNameTh = userinfomodel.FirstNameTh;
                    result.LastNameTh = userinfomodel.LastNameTh;

                    UserInfomationRepository.Update(result);
                }

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            //
            //
            //var ojb = new UserInformation
            //{
            //    CreateDate = DateTime.Now,
            //    UpdateDate = DateTime.Now,

            //    DepartmentCode = userinfomodel.DepartmentCode,
            //    Position = userinfomodel.PositionId,
            //    MarketingCode = userinfomodel.MarketingCode,

            //    TitleNameEng = userinfomodel.TitleNameEng,
            //    FirstNameEng = userinfomodel.FirstNameEng,
            //    LastNameEng = userinfomodel.LastNameEng,

            //    TitleNameTh = userinfomodel.IdTitleName,
            //    FirstNameTh = userinfomodel.FirstNameTh,
            //    LastNameTh = userinfomodel.LastNameTh




            //};

            //return userinfomodel.ToString();
        }

        // PUT api/userinfo/5
        public void Put(int id, [FromBody]string value)
        {
            value += value;
        }

        // DELETE api/userinfo/5
        public void Delete(int id)
        {
        }

        public List<UserInformationView> Get(string text, string property)
        {
            try
            {
                var view = UserInfomationRepository.Find(text, property, 0, 25);
                return view;
            }
            catch (Exception e)
            {
                Logger.Error(e);
                return null;
            }
        }
    }

    public enum TestType
    {
        class1,
        class2
    }
}
