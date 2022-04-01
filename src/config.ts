import { LevelsByName } from "tinga"

export const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const remoteLogUrl = `${url}/api/log`

export const browserLogLevel = (process.env.NEXT_PUBLIC_BROWSER_LOG_LEVEL ||
  "silent") as LevelsByName

export const browserRemoteLogLevel = (process.env
  .NEXT_PUBLIC_BROWSER_REMOTE_LOG_LEVEL || "trace") as LevelsByName

export const serverLogLevel = (process.env.SERVER_LOG_LEVEL ||
  "trace") as LevelsByName
