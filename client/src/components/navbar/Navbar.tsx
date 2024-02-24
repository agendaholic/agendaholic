import { Card, Stack } from "@mantine/core"
import { NavbarSection } from "./NavbarSection.tsx"

export const Navbar = () => {
    return (
        <Card withBorder={true} h={"100%"}>
            <Stack>
                <NavbarSection />
                <NavbarSection />
            </Stack>
        </Card>
    )
}
