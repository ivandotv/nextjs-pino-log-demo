import { AsyncLocalStorage } from "async_hooks"
import { serverLogLevel } from "config"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import pino from "pino"
import { v4 as uuid } from "uuid"

/* SERVER Request Logger */
const storage = new AsyncLocalStorage<pino.Logger>()

export const originalLogger = pino({
  level: serverLogLevel,
})

// Proxy logger instance to use child logger from the context if it exists
export const logger = new Proxy(originalLogger, {
  get(target, property, receiver) {
    target = storage.getStore() || target

    return Reflect.get(target, property, receiver)
  },
})

export function withLogger(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const child = originalLogger.child({ requestId: uuid() })

    return storage.run(child, () => handler(req, res))
  }
}
