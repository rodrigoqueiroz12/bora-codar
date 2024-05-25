import { z } from 'zod'

import { env } from '@/lib/env'

const GenerateQrCodeUrlParamsSchema = z.object({
  data: z.string(),
  size: z.string().optional(),
  'charset-source': z.enum(['ISO-8859-1', 'UTF-8']).optional(),
  'charset-target': z.enum(['ISO-8859-1', 'UTF-8']).optional(),
  ecc: z.enum(['L', 'M', 'Q', 'H']).optional(),
  color: z.string().optional(),
  bgcolor: z.string().optional(),
  margin: z.number().min(0).max(50).optional(),
  qzone: z.number().min(0).max(100).optional(),
  format: z.enum(['png', 'gif', 'jpeg', 'jpg', 'svg', 'eps']).optional(),
})

type GenerateQrCodeUrlParams = z.infer<typeof GenerateQrCodeUrlParamsSchema>

export function generateQrCodeUrl(params: GenerateQrCodeUrlParams) {
  const parsedParams = GenerateQrCodeUrlParamsSchema.parse(params)

  const url = new URL(env.VITE_QRCODE_API)

  for (const key in parsedParams) {
    if (Object.prototype.hasOwnProperty.call(parsedParams, key)) {
      const value = parsedParams[key as keyof GenerateQrCodeUrlParams]

      if (value) {
        url.searchParams.append(key, value.toString())
      }
    }
  }

  return url.toString()
}
