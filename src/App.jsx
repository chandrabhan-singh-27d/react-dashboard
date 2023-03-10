import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      Children: [

      ]
    }
  ])
  return (
    <div className="flex">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
