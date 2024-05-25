import { z } from 'zod'

import { MissingEnvironmentVariablesError } from '@/errors/missing-environment-variables-error'

const envSchema = z.object({
  VITE_QRCODE_API: z.string().url(),
  VITE_LINKEDIN_PROFILE_URL: z.string().url(),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error(import.meta.env)

  throw new MissingEnvironmentVariablesError()
}

export const env = _env.data
