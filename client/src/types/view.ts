export type TView = {
    id: string
    emoji: string
    label: string
    count: number
}

export type TSection = {
    id: string
    label: string
}

export type TViewGroup = TSection & {
    views: TView[]
}
