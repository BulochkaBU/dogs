import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailDogPage from "./pages/DetailDogPage";
import Page404 from "./pages/Page404";

export const router = createBrowserRouter([
  {
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/breeds/:id",
        element: <DetailDogPage />,
      },
    ],
  },
]);
