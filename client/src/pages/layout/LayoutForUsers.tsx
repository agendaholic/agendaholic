import { useDisclosure } from "@mantine/hooks"
import {
    AppShell,
    Avatar,
    Burger,
    Divider,
    Group,
    MantineColorScheme,
    Popover,
    SegmentedControl,
    Stack,
    useMantineColorScheme,
} from "@mantine/core"
import { Outlet } from "@tanstack/react-router"
import { IconSettings } from "@tabler/icons-react"
import { Navbar } from "../../components/navbar"

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
                    <Stack>
                        <SegmentedControl
                            value={colorScheme}
                            onChange={(value) => setColorScheme(value as MantineColorScheme)}
                            data={[
                                { label: "Light", value: "light" },
                                { label: "Dark", value: "dark" },
                                { label: "Auto", value: "auto" },
                            ]}
                        />
                        <Divider />
                        <Group>
                            <IconSettings />
                            Settings
                        </Group>
                        <Group>
                            <IconSettings />
                            Log out
                        </Group>
                    </Stack>
                </Popover.Dropdown>
            </Popover>
        </Group>
    )
}
//endregion

export const LayoutForUsers = () => {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            header={{ height: { base: 60, sm: 0 } }}
            navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
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
