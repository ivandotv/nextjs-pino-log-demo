import {
  browserLogLevel,
  browserRemoteLogLevel,
  loggerContext,
  remoteLogUrl,
} from "config"
import pino from "pino"

export const logger = pino({
  level: browserLogLevel,
  browser: {
    //The asObject option will create a pino-like log object instead of passing all arguments to a console method, for instance:
    // asObject: true,
    serialize: true,
    transmit: {
      level: browserRemoteLogLevel,
      send: (_level, logEvent) => {
        if (typeof window !== "undefined") {
          const blob = new Blob(
            [
              JSON.stringify({
                ctx: logEvent.bindings[0] ? logEvent.bindings[0] : undefined,
                data: logEvent.messages,
                level: logEvent.level.label,
                value: logEvent.level.value,
              }),
            ],
            {
              type: "application/json",
            }
          )
          navigator.sendBeacon(remoteLogUrl, blob)
        }
      },
    },
  },
}).child(loggerContext)
