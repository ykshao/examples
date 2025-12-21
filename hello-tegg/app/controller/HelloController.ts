import {
  HTTPController,
  HTTPMethod,
  HTTPMethodEnum,
  Context,
  HTTPContext,
  HTTPQuery,
  Middleware,
  Inject,
  type Logger,
} from 'egg';

import { traceMethod } from '../middleware/trace_method.ts';
import { HelloService } from '../biz/HelloService.ts';

@HTTPController()
@Middleware(traceMethod)
export class HelloController {
  @Inject()
  private readonly helloService: HelloService;

  @Inject()
  private readonly logger: Logger;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/hello',
  })
  async hello(@HTTPContext() ctx: Context, @HTTPQuery() name: string) {
    this.logger.info('access url: %s', ctx.url);

    const message = await this.helloService.hello(name);

    return {
      success: true,
      data: {
        message,
      },
    };
  }
}
