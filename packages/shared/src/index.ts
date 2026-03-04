export type HealthStatus = 'ok' | 'degraded' | 'down';

export function greeting(target: string): string {
  return `Hello from ${target}`;
}
