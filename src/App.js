import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Like from "./pages/Like";
import Bookmark from "./pages/Bookmark";
// import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { RootElement } from "./components/rootelement/RootElement";
import OurMock from "./pages/OurMock";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import { lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";
const Profile = lazy(()=> import("./pages/Profile"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/like",
        element: (
          <PrivateRoute>
            <Like />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookmark",
        element: (
          <PrivateRoute>
            <Bookmark />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/:profile",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loader/>}>
             <Profile />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/explore",
        element: (
          <PrivateRoute>
              <Explore />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/mock",
    element: <OurMock />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
