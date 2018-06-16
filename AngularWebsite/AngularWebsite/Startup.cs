using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularWebsite.Startup))]
namespace AngularWebsite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
