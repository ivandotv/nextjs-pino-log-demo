import { LevelsByName } from "tinga"

export const url =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://nextjs-pino-logging-demo.vercel.app"
    : process.env.NEXT_PUBLIC_VERCEL_URL
    ? process.env.NEXT_PUBLIC_VERCEL_URL!.replace(/\/$/, "")
    : "http://localhost:3000"

console.log("url --- ", url)
export const remoteLogUrl = `${url}/api/log`

export const browserLogLevel = (process.env.NEXT_PUBLIC_BROWSER_LOG_LEVEL ||
  "silent") as LevelsByName

export const browserRemoteLogLevel = (process.env
  .NEXT_PUBLIC_BROWSER_REMOTE_LOG_LEVEL || "trace") as LevelsByName

export const serverLogLevel = (process.env.SERVER_LOG_LEVEL ||
  "trace") as LevelsByName

export const loggerContext = { name: "Ivan", isDemo: true }

export const loggerText = "Lorem ipsum"
