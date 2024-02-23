import { Card, Checkbox, Group, Text } from "@mantine/core"

export const Task = () => {
    return <Card>
        <Card.Section>
            <Group justify={"space-between"}>
                <Group>
                    <Checkbox/>

                    <Text>Example task 1</Text>
                </Group>
                <Group>

                </Group>
            </Group>
        </Card.Section>
    </Card>
}