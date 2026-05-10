import { createFileRoute } from '@tanstack/react-router'
import { Card } from '#/components/ui/card'
import { Switch } from '#/components/ui/switch'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div>
      <Card className="w-3xl bg-amber-300">Hello "/contact"!</Card>
      <Switch />
    </div>
  )
}
