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
        public RestructureListModel Get(int start, int limit, int marketing_group)
        {
            try
            {
                RestructureListModel model = new RestructureListModel();
                model.data = restructureRepository.Get(start, limit, marketing_group);
                model.total = restructureRepository.Count(marketing_group);

                return model;
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return null;
            }
        }

        // GET api/restructure/5
        public RestructureListModel Get(int start, int limit, int marketing_group, string agrcode)
        {
            try
            {
                RestructureListModel model = new RestructureListModel();
                model.data = restructureRepository.Get(start, limit, marketing_group, agrcode);
                model.total = restructureRepository.Count(marketing_group, agrcode);

                return model;
            }
            catch (Exception ex)
            { 
                Logger.Error(ex);
                return null;
            }
        }

        // POST api/restructure
        public void Post(Restructure entity)
        {
            restructureRepository.SaveOrUpdate(entity);
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
