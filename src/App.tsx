import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/Pages/HomePage'
import { AccountPage } from './components/Pages/AccountPage/AccountPage'
import { ProductsPage } from './components/Pages/ProductsPage/ProductsPage'
import { Layout } from './components/Modules/LayoutApp/Layout'
import { Computers } from './components/Pages/ProductsPage/Computers/Computers'
import { AccountUser } from './components/Pages/AccountPage/AccountUser/AccountUser'
import { CartPage } from 'src/components/Pages/CartPage/CartPage'
import { ComputerDetails } from 'src/components/Pages/ProductsPage/Computers/ComputerDetails/ComputerDetails'
import { Accessories } from 'src/components/Pages/ProductsPage/Accessories/Accessories'
import { AccessoriesCategory } from 'src/components/Pages/ProductsPage/Accessories/AccessoriesCategory/AccessoriesCategory'
import { AccessoriesDetails } from 'src/components/Pages/ProductsPage/Accessories/AccessoriesDetails/AccessoriesDetails'

export default function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='ProductsPage'>
            <Route index element={<ProductsPage />} />
            <Route path='Computers'>
              <Route index element={<Computers />} />
              <Route path=':postId' element={<ComputerDetails />} />
            </Route>
            <Route path='Accessories'>
              <Route index element={<Accessories />} />
              <Route path=':category' element={<AccessoriesCategory />} />
              <Route
                path=':category/:postId'
                element={<AccessoriesDetails />}
              />
            </Route>
          </Route>
          <Route path='AccountPage' element={<AccountPage />} />
          <Route path='AccountUser' element={<AccountUser />} />
          <Route path='CartPage' element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  )
}
