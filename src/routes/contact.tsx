import { createFileRoute } from '@tanstack/react-router'
import { Card } from '#/components/ui/card'
import { Switch } from '#/components/ui/switch'
import { DropdownMenu } from '#/components/ui/dropdown-menu'
import { Badge } from '#/components/ui/badge'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div>
      <Card className="w-3xl bg-amber-300">Hello "/contact"!</Card>
      <Switch />
      <DropdownMenu />
      <div className="flex w-full flex-wrap justify-center gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </div>
  )
}
