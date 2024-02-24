import { createRootRoute } from "@tanstack/react-router"
import { LayoutForUsers } from "../pages/layout/LayoutForUsers.tsx"

export const Route = createRootRoute({
    component: () => (
        <>
            <LayoutForUsers />
            {/*<LayoutForNonUsers />*/}
        </>
    ),
})
