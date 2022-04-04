import { AsyncLocalStorage } from "async_hooks"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import pino from "pino"
import { serverLogLevel } from "config"
import { v4 as uuid } from "uuid"

/* SERVER Request Logger */

export const context = new AsyncLocalStorage<pino.Logger>()

const originalLogger = pino({
  level: serverLogLevel,
})

// Proxy logger instance to use child logger from the context if it exists
export const logger = new Proxy(originalLogger, {
  get(target, property, receiver) {
    target = context.getStore() || target

    return Reflect.get(target, property, receiver)
  },
})

export function withLogger(handler: NextApiHandler) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const child = originalLogger.child({ requestId: uuid() })

    return context.run(child, () => handler(req, res))
  }
}
