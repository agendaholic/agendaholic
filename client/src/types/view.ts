import { TTablerIcon } from "./icon.ts"

export type TView = {
    icon: TTablerIcon,
    label: string,
    count: number
}

export type TSection = {
    icon: TTablerIcon
    label: string
}

export type TViewGroup = TSection & {
    views: TView[]
}
