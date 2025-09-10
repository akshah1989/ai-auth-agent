import { config } from './core/config';
import { createLogger } from './core/logger';

const log = createLogger(config.LOG_LEVEL);

async function main() {
  log.info(`Starting app in ${config.NODE_ENV} mode on port ${config.PORT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
