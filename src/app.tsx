import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage/>,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage/>,
  },
]);

export function App() { //export antes de function + chamando daquela forma no main evita erros de importação por nome incorreto
  return <RouterProvider router={router} />
}
