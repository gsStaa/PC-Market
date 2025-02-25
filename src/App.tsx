import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/Pages/HomePage'
import { AccountPage } from './components/Pages/AccountPage/AccountPage'
import { ProductsPage } from './components/Pages/ProductsPage/ProductsPage'
import { Layout } from './components/Modules/LayoutApp/Layout'
import { Computers } from './components/Pages/ProductsPage/Computers/Computers'
import { AccountUser } from './components/Pages/AccountPage/AccountUser/AccountUser'
import { CartPage } from './components/Pages/CartPage/cartPage'

export default function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='ProductsPage' element={<ProductsPage />} />
          <Route path='ProductsPage/Computers' element={<Computers />} />
          <Route path='AccountPage' element={<AccountPage />} />
          <Route path='AccountPage/AccountUser' element={<AccountUser />} />
          <Route path='cartPage' element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  )
}
