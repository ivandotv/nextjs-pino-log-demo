import { NextApiRequest, NextApiResponse } from "next"
import { logger } from "lib/pino-server"
import { url } from "config"
/**
 * Special api route for logging important events in the browser
 */
const handler = async function logFromFrontend(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", url)
  res.setHeader("Access-Control-Allow-Credentials", "true")

  res.setHeader("Access-Control-Allow-Headers", "content-type")

  if (req.method === "OPTIONS") {
    res.end()

    return
  }
  try {
    const { level, data, ctx } = req.body
    // const level = payload?.level
    // const data = payload?.data

    //@ts-expect-error - index type mismatch
    let fn = (logger[level] || logger.info).bind(logger)
    // fn = fn.bind(logger)

    if (level && data) {
      fn({
        ctx,
        data,
        browser: true, // mark the log as comming from the browser
      })
    }
    res.status(204).end()
  } catch (e) {
    res.status(500).end()
  }
}

export default handler
