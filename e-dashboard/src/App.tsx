import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Overview from './pages/overview/Overview'
import SaleReport from './pages/saleReport/SaleReport'
import "./styles/global.scss"
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'

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
          content of pages
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
          path: "/overview",
          element: <Overview />,
        },
        {
          path: "/salereport",
          element: <SaleReport />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
