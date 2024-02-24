import { Stack, Text } from "@mantine/core"
import { NavbarItem } from "./NavbarItem.tsx"
import { NewViewButton } from "./NewViewButton.tsx"

export const NavbarSection = () => {
    return (
        <Stack>
            <Text size={"sm"} c={"gray"}>
                Default
            </Text>

            <Stack>
                <NavbarItem id={"1"} to={"/views/all"} emoji={"📦"} label={"All"} count={12} />
                <NavbarItem id={"1"} to={"/views/personal"} emoji={"💆"} label={"Personal"} count={12} />
                <NavbarItem id={"1"} to={"/views/work"} emoji={"💼"} label={"Work"} count={12} />
            </Stack>

            <NewViewButton />
        </Stack>
    )
}
