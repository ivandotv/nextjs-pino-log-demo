import { browserLogLevel, browserRemoteLogLevel, remoteLogUrl } from "config"
import Tinga from "tinga"

export const logger = new Tinga({
  level: browserLogLevel,
  label: "demo",
  remote: {
    url: remoteLogUrl,
    level: browserRemoteLogLevel,
  },
})
