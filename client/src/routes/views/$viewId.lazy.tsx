import { createLazyFileRoute } from "@tanstack/react-router"
import { View } from "../../pages/view/View.tsx"

export const ViewLazyRoute =  createLazyFileRoute("/views/$viewId")({
    component: View,
})

export const Route = ViewLazyRoute