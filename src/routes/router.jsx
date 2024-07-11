import { createBrowserRouter } from 'react-router-dom'
import { Root } from './root'
import { Home } from '../Pages/Home'
import { Catalog } from '../Pages/Catalog'
import { Error } from '../Pages/Error'
import { Product } from '../Pages/Product'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/catalog',
          element: <Catalog/>
        },
        {
          path: '/products/:id',
          element: <Product/>
        }
      ]
    },
])

export default router