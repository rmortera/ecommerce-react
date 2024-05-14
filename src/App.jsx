import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Order from './features/order/Order';
import Error from './ui/Error';
import Products, { loader as orderLoader } from './features/products/Products';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import CreateOrder from './features/order/CreateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        //action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        //loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
