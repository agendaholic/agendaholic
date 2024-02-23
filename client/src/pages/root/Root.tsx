import { useDisclosure } from "@mantine/hooks"
import {
    AppShell,
    Avatar,
    Badge,
    Burger,
    Card,
    Group,
    MantineColorScheme,
    Popover,
    SegmentedControl,
    Stack,
    Text,
    useMantineColorScheme,
} from "@mantine/core"
import { Outlet } from "@tanstack/react-router"
import { FC } from "react"
import { TView } from "../../types/view.ts"
import { Icon123 } from "@tabler/icons-react"

//region NavbarItem
type NavbarItemProps = {
    to: string
} & TView

const NavbarItem: FC<NavbarItemProps> = (props) => {
    return (
        <Group justify={"space-between"}>
            <Group>
                <props.icon />
                {props.label}
            </Group>

            <Group>
                <Badge variant={"default"}>12</Badge>
            </Group>
        </Group>
    )
}
//endregion

//region Navbar
const Navbar = () => {
    return (
        <Card withBorder={true} h={"100%"}>
            {/*<Card.Section>*/}
            <Stack>
                <Stack>
                    <Text size={"sm"} c={"gray"}>
                        Default
                    </Text>

                    <Stack>
                        <NavbarItem to={"/views/all"} icon={Icon123} label={"All"} count={12} />
                        <NavbarItem to={"/views/personal"} icon={Icon123} label={"Personal"} count={12} />
                        <NavbarItem to={"/views/work"} icon={Icon123} label={"Work"} count={12} />
                    </Stack>
                </Stack>
            </Stack>
            {/*</Card.Section>*/}
        </Card>
    )
}
//endregion

//region Header
const Header = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme()

    return (
        <Group justify={"flex-end"} hidden={true} visibleFrom={"sm"} p={"md"}>
            <Popover position={"bottom-end"}>
                <Popover.Target>
                    <Avatar />
                </Popover.Target>
                <Popover.Dropdown>
                    <SegmentedControl
                        value={colorScheme}
                        onChange={(value) => setColorScheme(value as MantineColorScheme)}
                        data={[
                            { label: "Light", value: "light" },
                            { label: "Dark", value: "dark" },
                            { label: "Auto", value: "auto" },
                        ]}
                    />
                </Popover.Dropdown>
            </Popover>
        </Group>
    )
}
//endregion

export const Root = () => {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            header={{ height: { base: 60, sm: 0 } }}
            navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
            // padding="md"
            // bg={"gray.0"}
        >
            <AppShell.Header withBorder={false} hiddenFrom={"sm"}>
                <Burger opened={opened} onClick={toggle} size="sm" />
            </AppShell.Header>
            <AppShell.Navbar withBorder={false} p={"md"}>
                <Navbar />
            </AppShell.Navbar>
            <AppShell.Main>
                <Header />
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}
