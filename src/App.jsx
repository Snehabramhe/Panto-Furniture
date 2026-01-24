import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      

    ]
  }])
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
