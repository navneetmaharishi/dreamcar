import { lazy } from "react";

const HomePage = lazy(() => import("./conteners/HomePage"));

const RentCarList = lazy(() => import("./conteners/RentCarList"));
const RentCarSummary = lazy(() => import("./conteners/RentCarSummary"));

const BuyCarList = lazy(() => import("./conteners/BuyCarList"));
const BuyCarSummary = lazy(() => import("./conteners/BuyCarSummary"));

const BookingCNF = lazy(() => import("./conteners/BookingCNF"));

const SellCar = lazy(() => import("./conteners/SellCar"));

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/rentList/:city",
    component: RentCarList,
  },
  {
    path: "/rentCarSummary/:id",
    component: RentCarSummary,
  },
  {
    path: "/buyList/:city?",
    component: BuyCarList,
  },
  {
    path: "/buyCarSummary/:id",
    component: BuyCarSummary,
  },
  {
    path: "/bookingCnf",
    component: BookingCNF,
  },
  {
    path: "/sellCar",
    component: SellCar,
  },
];

export default routes;
