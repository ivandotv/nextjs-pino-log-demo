import { PinoButtons } from "components/pino-buttons"
import { TingaButtons } from "components/tinga-buttons"
import type { NextPage } from "next"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
