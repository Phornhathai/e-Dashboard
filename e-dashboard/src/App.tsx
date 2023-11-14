import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Overview from './pages/overview/Overview'
import SaleReport from './pages/saleReport/SaleReport'
import "./styles/global.scss"
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Inventory from './pages/inventory/Inventory'
import Customer from './pages/customer/Customer'

function App() {
  // Layout for set css by global.scss
  const Layout = () => {
    return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          {/* each page will show detail with Outlet */}
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
    )
  }

  //Feature overview page of react router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Overview />,
        },
        {
          path: "/overview",
          element: <Overview />,
        },
        {
          path: "/salereport",
          element: <SaleReport />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
