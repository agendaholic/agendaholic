import { createRootRoute } from "@tanstack/react-router"
import { Root } from "../pages/root/Root.tsx"

export const Route = createRootRoute({
    component: () => <Root />,
})
