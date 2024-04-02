import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Product from "./Pages/Product/Product"
import Products from "./Pages/Products/Products"
import Admin from "./Pages/Admin/Admin"
import Edit from "./Pages/Admin/Edit"
import AddCategory from "./Pages/Admin/AddCategory"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import './App.scss'

const LayOut = () => {
    return (
        <div className='app'>
            <NavBar />
            <Outlet/>
            <Footer/>
        </div>
    )
}
const router = createBrowserRouter([
{
    path: "/",
    element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products/:id",
                element: <Products />
            },
            {
                path: "/product/:id",
                element: <Product />
            },
            {
                path: "/admin",
                element: <Admin/>
            },
            {
                path: "/edit/:id",
                element: <Edit/>
            },
            {
                path: "/addcategory",
                element: <AddCategory/>
            },
        ]
},
])

function App() {
  return (
    <>
          <RouterProvider router={router } />
    </>
  )
}

export default App
