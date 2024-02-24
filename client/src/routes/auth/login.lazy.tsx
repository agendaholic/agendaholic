import { createLazyFileRoute } from "@tanstack/react-router"
import { Login } from "../../pages/auth/Login.tsx"

export const LoginLazyRoute = createLazyFileRoute("/auth/login")({
    component: () => <Login />,
})

export const Route = LoginLazyRoute
