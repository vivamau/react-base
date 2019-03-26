import Homepage from "views/Homepage/Homepage";
import Page1 from "views/Page1/Page1";
import Page2 from "views/Page2/Page2";
import Page3 from "views/Page3/Page3";
import ErrorNotFound from "../views/Errors/404";

const siteRoutes = [
  {
    path: "/",
    name: "Homepage",
    icon: "",
    component: Homepage,
    private: false
  },
  {
    path: "/page1",
    name: "Page1",
    icon: "",
    component: Page1,
    private: true
  },
  {
    path: "/page2",
    name: "Page2",
    icon: "",
    component: Page2,
    private: false
  },
  {
    path: "/page3",
    name: "Page3",
    icon: "",
    component: Page3,
    private: true
  },
  {
    path: "*",
    name: "Page Not Found",
    icon: "",
    component: ErrorNotFound,
    private: false
  }
];
export default siteRoutes;
