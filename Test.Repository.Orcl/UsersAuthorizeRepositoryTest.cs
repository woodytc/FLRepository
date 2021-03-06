﻿using KTBLeasing.FrontLeasing.Mapping.Orcl.Reposotory;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using KTBLeasing.FrontLeasing.Domain;
using System.Collections.Generic;
using NHibernate;
using NHibernate.ByteCode.Castle;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using KTBLeasing.FrontLeasing.Mapping.Orcl;
using KTBLeasing.Domain;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace Test.Repository.Orcl
{
    
    
    /// <summary>
    ///This is a test class for UsersAuthorizeRepositoryTest and is intended
    ///to contain all UsersAuthorizeRepositoryTest Unit Tests
    ///</summary>
    [TestClass()]
    public class UsersAuthorizeRepositoryTest
    {


        private TestContext testContextInstance;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        #region Additional test attributes
        // 
        //You can use the following additional attributes as you write your tests:
        //
        //Use ClassInitialize to run code before running the first test in the class
        //[ClassInitialize()]
        //public static void MyClassInitialize(TestContext testContext)
        //{
        //}
        //
        //Use ClassCleanup to run code after all tests in a class have run
        //[ClassCleanup()]
        //public static void MyClassCleanup()
        //{
        //}
        //
        //Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //}
        //
        //Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //}
        //
        #endregion


        /// <summary>
        ///A test for GetAll
        ///</summary>
        [TestMethod()]
        public void GetAllTest()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository(); // TODO: Initialize to an appropriate value
            target.SessionFactory = CreateSessionFactory();
            List<UsersAuthorize> expected = null; // TODO: Initialize to an appropriate value
            List<UsersAuthorize> actual =  new List<UsersAuthorize>();
            actual = target.GetAll();
            Assert.AreEqual(true, actual.Count > 0);
          //  Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Insert
        ///</summary>
        [TestMethod()]
        public void InsertTest()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository(); // TODO: Initialize to an appropriate value
            UsersAuthorize entity = new UsersAuthorize(); // TODO: Initialize to an appropriate value
            target.SessionFactory = CreateSessionFactory();
            entity.Active = 1;
            entity.UserId = "test";
            entity.DepCode = "01";
               
            target.Insert(entity);
            Assert.Inconclusive("A method that does not return a value cannot be verified.");
        }

        [TestMethod()]
        public void TransformsTest()
        {
            //HibernatingRhinos.Profiler.Appender.NHibernate.NHibernateProfiler.Initialize();

            //CommonAddressRepository target = new CommonAddressRepository(); // TODO: Initialize to an appropriate value
            //UsersAuthorize entity = new UsersAuthorize(); // TODO: Initialize to an appropriate value

            //target.SessionFactory = CreateSessionFactory();
            //target.getsql();
            

            
            //Assert.Inconclusive("A method that does not return a value cannot be verified.");
        }

        [TestMethod()]
        public void TestGetAddressTOViewAddress()
        {
            AddressRepository target = new AddressRepository();
            target.SessionFactory = CreateSessionFactory();
            var result = target.GetAll(0,10,999);

            Assert.Inconclusive("A method that does not return a value cannot be verified.");
        }

        private static ISessionFactory CreateSessionFactory()
        {
            try
            {
                var sessionf = Fluently.Configure()
                    .ProxyFactoryFactory<ProxyFactoryFactory>()
                    .Database(OracleClientConfiguration.Oracle10.ConnectionString(x =>
                        x.Server("221.23.0.70")
                        .Port(1521)
                        .Username("fluser")
                        .Password("ktblitadmin")
                        .Instance("ktbl"))
                        )
                    .Mappings(m => m.FluentMappings.AddFromAssemblyOf<RoleMap>())
                    .ExposeConfiguration(c => c.SetProperty("current_session_context_class", "thread_static"))
                    .BuildSessionFactory();
                return sessionf;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message); //ex.Message;
                //  return null;
            }
        }

        [TestMethod]
        public void Testmaping()
        {

            Assert.AreEqual(true, !CreateSessionFactory().IsClosed);
        }


        /// <summary>
        ///A test for UsersAuthorizeRepository Constructor
        ///</summary>
        [TestMethod()]
        public void UsersAuthorizeRepositoryConstructorTest()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository();
            Assert.Inconclusive("TODO: Implement code to verify target");
        }

        /// <summary>
        ///A test for Count
        ///</summary>
        [TestMethod()]
        public void CountTest()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository(); // TODO: Initialize to an appropriate value
            int expected = 0; // TODO: Initialize to an appropriate value
            int actual;
            actual = target.Count();
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Count
        ///</summary>
        [TestMethod()]
        public void CountTest1()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository(); // TODO: Initialize to an appropriate value
            string text = string.Empty; // TODO: Initialize to an appropriate value
            int expected = 0; // TODO: Initialize to an appropriate value
            int actual;
            actual = target.Count(text);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Find
        ///</summary>
        [TestMethod()]
        public void FindTest()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository(); // TODO: Initialize to an appropriate value
            int start = 0; // TODO: Initialize to an appropriate value
            int limit = 0; // TODO: Initialize to an appropriate value
            string text = string.Empty; // TODO: Initialize to an appropriate value
            List<UsersAuthorize> expected = null; // TODO: Initialize to an appropriate value
            List<UsersAuthorize> actual;
            actual = target.Find(start, limit, text);
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for GetAll
        ///</summary>
        [TestMethod()]
        public void GetAllTest1()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository(); // TODO: Initialize to an appropriate value
            List<UsersAuthorize> expected = null; // TODO: Initialize to an appropriate value
            List<UsersAuthorize> actual;
            actual = target.GetAll();
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for GetAll
        ///</summary>
        [TestMethod()]
        public void GetAllTest2()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository(); // TODO: Initialize to an appropriate value
            int start = 0; // TODO: Initialize to an appropriate value
            int limit = 0; // TODO: Initialize to an appropriate value
            List<UsersAuthorize> expected = null; // TODO: Initialize to an appropriate value
            List<UsersAuthorize> actual;
            actual = target.GetAll(start, limit);
            
            Assert.AreEqual(expected, actual);
            Assert.Inconclusive("Verify the correctness of this test method.");
        }

        /// <summary>
        ///A test for Insert
        ///</summary>
        [TestMethod()]
        public void InsertTest1()
        {
            UsersAuthorizeRepository target = new UsersAuthorizeRepository(); // TODO: Initialize to an appropriate value
            UsersAuthorize entity = null; // TODO: Initialize to an appropriate value
            target.Insert(entity);
            Assert.Inconclusive("A method that does not return a value cannot be verified.");
        }



        [TestMethod()]
        public void GetTreeTest()
        {
            //HibernatingRhinos.Profiler.Appender.NHibernate.NHibernateProfiler.Initialize();
            //CommonRepository target = new CommonRepository(); // TODO: Initialize to an appropriate value
            //target.SessionFactory = CreateSessionFactory();

            //List<ProvinceTree> abc = target.GetProvinceTree();

            ////var root = abc.Where(x => x.Levels == 0);

            //var json = JsonConvert.SerializeObject(abc);
            
            //Assert.AreEqual(true, actual.Count > 0);
            //  Assert.Inconclusive("Verify the correctness of this test method.");
        }
    }

    public class CommonAddress1
    {
        public long Id { get; set; }
        public int Parent_Id { get; set; }
        public int Levels { get; set; }
        public string Name { get; set; }
        public bool IsLeaf { get; set; }
    }
}
