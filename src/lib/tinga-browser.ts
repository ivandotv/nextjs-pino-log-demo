import {
  browserLogLevel,
  browserRemoteLogLevel,
  loggerContext,
  remoteLogUrl,
} from "config"
import Tinga from "tinga"
import { serializeError, type ErrorObject } from "serialize-error"

export const logger = new Tinga({
  level: browserLogLevel,
  label: "demo",
  ctx: loggerContext,
  remote: {
    url: remoteLogUrl,
    level: browserRemoteLogLevel,
    processData: (ctx, args, info) => {
      //if first argument to a log method is an instance of Error serialize it
      if (args[0] instanceof Error) {
        const err: ErrorObject = serializeError(args[0])
        args[0] = {
          ...err,
          msg: err.message, //conform to pino format
        }
      }
      return {
        ctx,
        data: args,
        level: info.level.name,
        value: info.level.value,
      }
    },
  },
})
