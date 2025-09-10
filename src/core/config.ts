import dotenv from 'dotenv';
import { z } from 'zod';

// Load base .env first, then .env.local to override
dotenv.config();
dotenv.config({ path: '.env.local', override: true });

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(0).default(3000),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
});

export type AppConfig = z.infer<typeof EnvSchema>;

export function loadConfig(env: NodeJS.ProcessEnv = process.env): AppConfig {
  const parsed = EnvSchema.safeParse(env);
  if (!parsed.success) {
    const { fieldErrors } = parsed.error.flatten();
    const message = Object.entries(fieldErrors)
      .map(([k, v]) => `${k}: ${v?.join(', ')}`)
      .join('; ');
    throw new Error(`Invalid environment variables: ${message}`);
  }
  return parsed.data;
}

export const config = loadConfig();
