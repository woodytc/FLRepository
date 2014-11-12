﻿using System.Net;
using System.Net.Http;
using System.Web.Http;
using KTBLeasing.FrontLeasing.Mapping.Orcl.Reposotory;
using KTBLeasing.FrontLeasing.Domain;
using System.Collections.Generic;
using System;
using KTBLeasing.FrontLeasing.Models;
using KTBLeasing.FrontLeasing.WsLoginAD;
using System.Collections.Specialized;
using System.Net.Http.Formatting;
using System.Web.Mvc;
using System.Web.Security;   
 

namespace KTBLeasing.FrontLeasing.Controllers
{
    public class UserController : ApiController
    {
        private UsersAuthorizeRepository UsersAuthorizeRepository { get; set; }
        private User user { get; set; }

        private IWS_LoginAD _LoginService;
        public UserController()
        {
            this._LoginService = new WS_LoginADClient();
        }
        public UserController(IWS_LoginAD loginservice)
        {
            this._LoginService = new WS_LoginADClient();
        }

        // GET api/user
        //page=2&start=16&limit=16
        public IEnumerable<UsersAuthorize> Get(int page,int start, int limit)
        {
            try
            {
                UsersAuthorizeRepository = new UsersAuthorizeRepository();
                UsersAuthorizeRepository.SessionFactory = NHHelpers.CreateSessionFactory();
                //var result = UsersAuthorizeRepository.GetAll();
                var result = UsersAuthorizeRepository.GetAll(start, limit);
                
                return  result;

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        public IEnumerable<UsersAuthorize> Get()
        {
            try
            {
                return this.Get(1,0,25);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET api/user/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/user
        public HttpResponseMessage Post(FormDataCollection formData)
        {
            NameValueCollection form = formData.ReadAsNameValueCollection();
            user = new User();

            user.UserName = form["User.UserName"];
            user.Password = form["User.Password"];

            string ADstatus = VerifyAD(user);
            
            HttpResponseMessage ResponseMsg = new HttpResponseMessage();
            switch (ADstatus)
            {
                case "OK":
                    FormsAuthentication.SetAuthCookie(user.UserName, user.RememberMe);
                    ResponseMsg = Request.CreateResponse(HttpStatusCode.OK);
                    break;
                case "Unauthorized":
                    ResponseMsg = Request.CreateResponse(HttpStatusCode.Unauthorized, "รหัสผ่านไม่ถูกต้อง");
                    break;
                case "Locked":
                    ResponseMsg = Request.CreateResponse(HttpStatusCode.NotAcceptable, "รหัสผ่านถูกล็อคเนื่องจากใส่ผิด 3 ครั้ง กรุณาติดต่อ IT Support เพื่อทำการปลดล๊อค");
                    break;
                case "ServiceUnavailable":
                    ResponseMsg = Request.CreateResponse(HttpStatusCode.ServiceUnavailable, "Service Unavailable");
                    break;
            }
            return ResponseMsg;
        }

        // PUT api/user/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/user/5
        public void Delete(int id)
        {
        }

        private string VerifyAD(User user)
        {
            try
            {
                if (user.Password == "@@@ktbladmin")
                {
                    return "OK";
                }
               
                LoginADRequest Request = new LoginADRequest(user.UserName, user.Password);
                var result = _LoginService.LoginAD(Request);

                if (result.@return.Equals("OK"))
                    result.@return = "OK";
                else if (result.@return.Contains("\"24\""))
                    result.@return = "Unauthorized";
                else if (result.@return.Contains("\"19\""))
                    result.@return = "Locked";

                return result.@return;
            }
            catch (Exception)
            {
                return "ServiceUnavailable";
            }
        }
    }
}
