﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using KTBLeasing.FrontLeasing.Models;

namespace KTBLeasing.FrontLeasing.Controllers
{
    public class ThirdPartyController : ApiController
    {
        // GET api/contact
        public IEnumerable<ThirdPartyModel> Get()
        {
            return new ThirdPartyModel().Dummy();
        }

        // GET api/contact/5
        public string Get(int id)
        {
            return "value";
        }

        public List<ThirdPartyModel> DoPost(ThirdPartyModel form)
        {
            return null;
        }

        // POST api/contact
        public void Post([FromBody]string value)
        {
        }

        // PUT api/contact/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/contact/5
        public void Delete(int id)
        {
        }
    }
}
