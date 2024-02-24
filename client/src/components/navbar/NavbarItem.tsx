import { Badge, Group } from "@mantine/core"
import { TView } from "../../types/view.ts"
import { FC } from "react"

type NavbarItemProps = {
    to: string
} & TView

export const NavbarItem: FC<NavbarItemProps> = (props) => {
    return (
        <Group justify={"space-between"}>
            <Group>
                {props.emoji}
                {props.label}
            </Group>

            <Group>
                <Badge variant={"default"}>12</Badge>
            </Group>
        </Group>
    )
}
