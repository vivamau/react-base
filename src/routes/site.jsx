import Homepage from "views/Homepage/Homepage";
import Page1 from "views/Page1/Page1";
import Page2 from "views/Page2/Page2";


const siteRoutes = [
    {
        path: "/homepage",
        name: "Homepage",
        icon: "",
        component: Homepage
    },
    {
      path: "/page1",
      name: "Page1",
      icon: "",
      component: Page1
    },
    {
        path: "/page2",
        name: "Page2",
        icon: "",
        component: Page2
      },
    { redirect: true, path: "/", to: "/homepage", name: "Homepage" }
];
export default siteRoutes;