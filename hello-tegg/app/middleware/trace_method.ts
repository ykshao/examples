import type { Context, Next } from 'egg';

export async function traceMethod(ctx: Context, next: Next) {
  await next();
  ctx.body.data.message += ` (${ctx.method})`;
}
