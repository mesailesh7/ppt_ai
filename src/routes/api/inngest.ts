import { createFileRoute } from '@tanstack/react-router'
// import { createServerFileRoute } from '@tanstack/react-start/server'
import { serve } from 'inngest/edge'
import { inngest } from '#/integrations/inngest/client'
import { generatePresentation } from '#/integrations/inngest/function'

const handler = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    // helloWorld,
    generatePresentation,
  ],
})

export const Route = createFileRoute('/api/inngest')({
  server: {
    handlers: {
      GET: async ({ request }) => handler(request),
      POST: async ({ request }) => handler(request),
      PUT: async ({ request }) => handler(request),
    },
  },
})
