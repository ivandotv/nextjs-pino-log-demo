import { PinoButtons } from "components/pino-buttons"
import { TingaButtons } from "components/tinga-buttons"
import type { NextPage } from "next"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>
        Open browser console to see the logs.
        <br />
        Check network monitor to see requests to the backend.
      </p>
      <div className={styles.demoRow}>
        <p>Log with Pino</p>
        <PinoButtons />
      </div>
      <div className={styles.demoRow}>
        <p>Log with Tinga</p>
        <TingaButtons />
      </div>
    </div>
  )
}

export default Home
