import { createLazyFileRoute } from '@tanstack/react-router'

export const SettingsRoute = createLazyFileRoute('/settings')({
  component: () => <div>Hello /settings!</div>
})

export const Route = SettingsRoute