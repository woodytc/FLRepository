﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using KTBLeasing.FrontLeasing.Models;
using Newtonsoft.Json.Linq;
using KTBLeasing.FrontLeasing.Domain;
using log4net;
using System.Reflection;
using KTBLeasing.FrontLeasing.Mapping.Orcl.Reposotory;
using Newtonsoft.Json;

namespace KTBLeasing.FrontLeasing.Controllers
{
    public class RestructureController : ApiController
    {
        private IRestructureRepository restructureRepository { get; set; }
        private static readonly ILog Logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        // GET api/restructure
        public List<Restructure> Get()
        {
            return new List<Restructure>();
        }

        // GET api/restructure/5
        public List<Restructure> Get(int start, int limit, string agrcode)
        {
            var result = restructureRepository.Get(start, limit, agrcode);

            return (result != null) ? result : new List<Restructure>();
        }

        public int GetCount(string agrcode)
        {
            return restructureRepository.Count(agrcode);
        }

        // POST api/restructure
        public void Post(Restructure entity)
        {
            restructureRepository.Insert(entity);
        }

        // PUT api/restructure/5
        public void Put(long id, Restructure entity)
        {
            restructureRepository.Update(entity);
        }

        // DELETE api/restructure/5
        public void Delete(int id)
        {
        }
    }
}
