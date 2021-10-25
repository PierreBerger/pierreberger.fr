import ThemeChanger from '@components/theme-changer';
import Github from '@icons/github.svg';
import Gitlab from '@icons/gitlab.svg';
import Linkedin from '@icons/linkedin.svg';
import Twitter from '@icons/twitter.svg';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pierre Berger · Full Stack Engineer</title>

        <meta property="og:title" content="Pierre Berger · Front-End Engineer" key="title" />
        <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon/favicon.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="favicon/favicon-32.png" type="image/png" />
        <link rel="icon" sizes="64x64" href="favicon/favicon-64.png" type="image/png" />
        <link rel="icon" sizes="96x96" href="favicon/favicon-96.png" type="image/png" />
        <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
        <link rel="icon" sizes="196x196" href="favicon/favicon-196.png" type="image/png" />
        <meta name="msapplication-TileImage" content="favicon-144.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
      </Head>

      <main className={styles.container}>
        <ThemeChanger />
        <h1 className={styles.title}>Pierre Berger</h1>
        <p className={styles.description}>
          Full Stack Engineer
          <Link href="https://wizbii.com">
            <a className={styles.descriptionCompany}> @Wizbii</a>
          </Link>
        </p>

        <ul className={styles.links}>
          <li>
            <Link href="https://twitter.com/pascokes">
              <a target="_blank">
                <Twitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/pierre-berger">
              <a target="_blank">
                <Linkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/pierreberger">
              <a target="_blank">
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://gitlab.com/pierreberger">
              <a target="_blank">
                <Gitlab />
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
