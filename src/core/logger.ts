export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export const createLogger = (level: LogLevel = 'info') => {
  const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
  const threshold = levels.indexOf(level);

  const shouldLog = (l: LogLevel) => levels.indexOf(l) >= threshold;

  return {
    debug: (...args: unknown[]) => shouldLog('debug') && console.debug('[debug]', ...args),
    info: (...args: unknown[]) => shouldLog('info') && console.info('[info ]', ...args),
    warn: (...args: unknown[]) => shouldLog('warn') && console.warn('[warn ]', ...args),
    error: (...args: unknown[]) => shouldLog('error') && console.error('[error]', ...args),
  };
};
