import { browserLogLevel, browserRemoteLogLevel, remoteLogUrl } from "config"
import pino from "pino"

/* Examples

logger.info('message')
logger.info( {msg:'message', name: 'ivan' })
logger.info({ err: new Error('my error'), customData: 'lorem ipsum' })
logger.info(new Error('my error'))
*/

export const logger = pino({
  level: browserLogLevel,
  // https://github.com/pinojs/pino/blob/master/docs/browser.md
  browser: {
    //The asObject option will create a pino-like log object instead of passing all arguments to a console method, for instance:
    // asObject: true,
    serialize: true,

    transmit: {
      level: browserRemoteLogLevel,
      send: (level, logEvent) => {
        if (typeof window !== "undefined") {
          const blob = new Blob(
            [
              JSON.stringify({
                msg: logEvent.messages,
                level,
                // ts: logEvent.ts
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
}).child({ browser: true })
