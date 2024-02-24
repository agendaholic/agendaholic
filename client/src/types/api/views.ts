import { TPostRequest } from "../request.ts"
import { TSection, TView } from "../view.ts"

//region POST /views
export type TViewsPost = TPostRequest<
    "/views",
    {
        sectionId: TSection["id"]
        emoji: string
        label: string
    },
    {
        view: TView
    }
>
//endregion
