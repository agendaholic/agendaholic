import { TViewGroup } from "../view.ts"

//region GET /me

export type TApiMeRequest = {}

export type TApiMeResponse = {
    views: TViewGroup[]
}
//endregion
