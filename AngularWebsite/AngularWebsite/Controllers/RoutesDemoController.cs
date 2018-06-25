﻿using System.Web.Mvc;

namespace AngularWebsite.Controllers
{
    public class RoutesDemoController : Controller
    {
        public ActionResult One()
        {
            return
                View();
        }

        public ActionResult Two(int donuts = 1)
        {
            ViewBag.Donuts = donuts;
            return
                View();
        }

        [Authorize]
        public ActionResult Three()
        {
            return
                View();
        }

        public ActionResult Four()
        {
            return
                View();
        }
    }
}