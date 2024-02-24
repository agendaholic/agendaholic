import { createLazyFileRoute } from "@tanstack/react-router"
import { Register } from "../../pages/auth/Register.tsx"

export const RegisterLazyRoute = createLazyFileRoute("/auth/register")({
    component: () => <Register />,
})

export const Route = RegisterLazyRoute
