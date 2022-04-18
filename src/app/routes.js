import { lazy } from "react";

const Routes = [
  // DEFAULT PAGES
  {
    path: "/",
    component: lazy(() => import("pages/app")),
    name: "Splash Screen",
  },
  /*
   ---------------------------------------------
    YOUR URL PAGES
   ---------------------------------------------
  */
  {
    path: "/home",
    component: lazy(() => import("pages/Home")),
    name: "Home",
  },
  {
    path: "/ktp-guidance",
    component: lazy(() => import("pages/Ktp-Guidance")),
    name: "KTP Guidance",
  },
  {
    path: "/ktp-photo",
    component: lazy(() => import("pages/Ktp-Photo")),
    name: "KTP Photo",
  },
  {
    path: "/ktp-selfi-guidance",
    component: lazy(() => import("pages/Ktp-Selfie-Guidance")),
    name: "KTP Selfi Guidance",
  },
  {
    path: "/ktp-selfi-photo",
    component: lazy(() => import("pages/Ktp-Selfie-Photo")),
    name: "KTP Selfi Photo",
  },
  {
    path: "/data-confirmation",
    component: lazy(() => import("pages/Data-Confirm")),
    name: "Data Confirmation",
  },
  {
    path: "/selfi-guidance",
    component: lazy(() => import("pages/Selfie-Guidance")),
    name: "Selfi Guidance",
  },
  {
    path: "/selfi-photo",
    component: lazy(() => import("pages/Selfie-Photo")),
    name: "Selfi Photo",
  },
  /*
    ---------------------------------------------
    PLEASE KEEP PUT IT AT THE BOTTOM
    ---------------------------------------------
  */
  {
    path: "*",
    component: lazy(() => import("pages/404")),
    name: "Page not found",
  },
];

export default Routes;
