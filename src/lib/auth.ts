import { betterAuth, github } from 'better-auth'
import { tanstackStartCookies } from 'better-auth/tanstack-start'

import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from './db'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [tanstackStartCookies()], // make sure this is the last plugin in the array
})
