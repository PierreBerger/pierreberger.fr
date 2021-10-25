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

        <meta name="description" content="Full Stack Developper and tech enthusiast" />
        <meta property="og:title" content="Pierre Berger · Front-End Engineer" key="title" />
        <meta property="og:description" content="Full Stack Developper and tech enthusiast" />
      </Head>

      <main className={styles.container}>
        <ThemeChanger />
        <h1 className={styles.title}>Pierre Berger</h1>
        <p className={styles.description}>
          Full Stack Engineer{' '}
          <Link href="https://wizbii.com">
            <a target="_blank" rel="noopener" className={styles.descriptionCompany}>
              @Wizbii
            </a>
          </Link>
        </p>

        <ul className={styles.links}>
          <li>
            <Link href="https://twitter.com/pascokes">
              <a target="_blank" rel="noopener" aria-label="Twitter Icon">
                <Twitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/pierre-berger">
              <a target="_blank" rel="noopener" aria-label="Linkedin Icon">
                <Linkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/pierreberger">
              <a target="_blank" rel="noopener" aria-label="Github Icon">
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://gitlab.com/pierreberger">
              <a target="_blank" rel="noopener" aria-label="Gitlab Icon">
                <Gitlab />
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
