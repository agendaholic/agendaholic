import { createLazyFileRoute } from "@tanstack/react-router"
import { Dashboard } from "../pages/dashboard/Dashboard.tsx"

export const DashboardRoute = createLazyFileRoute("/dashboard")({
    component: () => <Dashboard />,
})

export const Route = DashboardRoute