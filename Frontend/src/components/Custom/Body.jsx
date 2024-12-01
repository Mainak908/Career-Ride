import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../../App"
import LoginSignup from "./LoginSignup"
import Dashboard from "./Dashboard/Dashboard"

const Body = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: '/auth',
            element: <LoginSignup />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
    ])
    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default Body