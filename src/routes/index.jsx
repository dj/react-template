import { createBrowserRouter } from "react-router-dom"
import RootRoute from "./RootRoute"

const router = createBrowserRouter([{ path: "/", element: <RootRoute /> }])

export default router
