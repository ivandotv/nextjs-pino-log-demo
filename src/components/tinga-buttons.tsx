import styles from "../styles/Home.module.css"
import { logger } from "lib/tinga-browser"
import { loggerText } from "config"
import { useState } from "react"
export function TingaButtons() {
  return (
    <div className={styles.buttonsWrap}>
      <button
        onClick={() => {
          logger.debug(loggerText)
        }}
      >
        Debug
      </button>
      <button
        onClick={() => {
          logger.warn(loggerText)
        }}
      >
        Warn
      </button>
      <button
        onClick={() => {
          logger.error(new Error("My custom error"), loggerText)
        }}
      >
        Error
      </button>
    </div>
  )
}
