import { createFileRoute } from "@tanstack/react-router"

export const ViewRoute =  createFileRoute("/views/$viewId")({
    loader: ({params}) => {
        console.log(params)

        return params
    }
})

export const Route = ViewRoute