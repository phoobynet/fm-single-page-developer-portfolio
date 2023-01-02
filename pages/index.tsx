import iconFrontendMentor from '@/assets/images/icon-frontend-mentor.svg'
import iconGithub from '@/assets/images/icon-github.svg'
import iconLinkedin from '@/assets/images/icon-linkedin.svg'
import iconTwitter from '@/assets/images/icon-twitter.svg'
import profileMobile from '@/assets/images/image-profile-mobile.webp'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Single-page developer portfolio</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <div className={styles.home}>
        <header className={styles.header}>
          <div className={styles.myName}>adamkeyes</div>
          <div className={styles.mySocialMedia}>
            <Image
              src={iconGithub}
              alt=""
            />
            <Image
              src={iconFrontendMentor}
              alt=""
            />
            <Image
              src={iconLinkedin}
              alt=""
            />
            <Image
              src={iconTwitter}
              alt=""
            />
          </div>
          <Image
            src={profileMobile}
            alt=""
            className={styles.myProfileImage}
          />
        </header>
        <main></main>
      </div>
    </>
  )
}
