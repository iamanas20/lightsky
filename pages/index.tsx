import type { NextPage } from 'next';
import Image from 'next/image';
import { Card } from '../components';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.topCardSection}>
          <Card className={styles.overviewCard}>
            <Image src="/weather-icons/mcloudy.svg" layout="intrinsic" width="120px" height="120px"/>
            <div className={styles.temperature}>
              28°<span>C</span>
            </div>
            <div className={styles.description}>
              <Image src="/weather-small-icons/mcloudy-icon.svg" layout="intrinsic" width="28px" height="28px"/>
              <span>Rainy Storm Clouds</span>
            </div>
            <div className={styles.separator}/>
            <div className={styles.location}>
              <Image src="/icons/calendar.svg" layout="intrinsic" width="18px" height="18px"/>
              <span>
                Miami, USA.
              </span>
            </div>
            <div className={styles.time}>
              <Image src="/icons/map-pin.svg" layout="intrinsic" width="18px" height="18px"/>
              <span>
                { new Date().toLocaleString() }
              </span>
            </div>
          </Card>
          <Card className={styles.dataCard}>
            Hello
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Home