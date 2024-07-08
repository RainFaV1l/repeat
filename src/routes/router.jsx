import { createBrowserRouter } from 'react-router-dom'
import { Root } from './root'
import { Home } from '../Pages/Home'
import { Catalog } from '../Pages/Catalog'
import { Error } from '../Pages/Error'

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
      ]
    },
])

export default router