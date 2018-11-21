import Homepage from "../views/Homepage/Homepage";
import Page1 from "../views/Page1/Page1";


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
    { redirect: true, path: "/", to: "/homepage", name: "Homepage" }
];
export default siteRoutes;