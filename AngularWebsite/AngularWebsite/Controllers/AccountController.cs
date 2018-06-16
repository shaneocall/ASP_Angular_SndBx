using System.Web.Mvc;

namespace AngularWebsite.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        [AllowAnonymous]
        public ActionResult Login()
        {
            return
            View();
        }
    }
}