import { Group, Text } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"

export const NewViewButton = () => {
    return (
        <Group>
            <IconPlus />
            <Text>Create new view</Text>
        </Group>
    )
}
