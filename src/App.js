import AddContact from "./AddContact/AddContact";
import Home from "./home";
import "./App.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home />)
  },
  {
    path: '/Add',
    element: (<AddContact/>),
   
  }
])

function App() {



  return (
      <div className="App" dir='rtl'>

      <RouterProvider router={router}/>

      </div>
  );
}


export default App;
