import type { NextPage } from 'next';
import { Card } from '../components';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.topCardSection}>
          <Card className={styles.overviewCard}>
            Hello
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