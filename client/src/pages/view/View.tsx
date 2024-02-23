import { Card, Container, Group, Stack, TextInput } from "@mantine/core"
import { Task } from "../../components/task/Task.tsx"
import { useFocusWithin } from "@mantine/hooks"

const ViewHeader = () => {
    return <Stack>Title of view</Stack>
}

const NewTask = () => {
    const { ref, focused } = useFocusWithin()

    return (
        <Card ref={ref} withBorder={focused}>
            <Card.Section>
                <Group justify={"space-between"}>
                    <TextInput variant={"unstyled"} />
                    <Group></Group>
                </Group>
            </Card.Section>
        </Card>
    )
}

const Tasks = () => {
    return (
        <Stack>
            <NewTask />
            <Stack>
                <Task />
                <Task />
                <Task />
            </Stack>
        </Stack>
    )
}

export const View = () => {
    return (
        <Container size={"sm"}>
            <Stack>
                <ViewHeader />
                <Tasks />
            </Stack>
        </Container>
    )
}
