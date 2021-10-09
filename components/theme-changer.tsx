import styles from '@components/theme-changer.module.scss';
import Moon from '@icons/moon.svg';
import Sun from '@icons/sun.svg';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const themeIcon =
    resolvedTheme === 'dark' ? (
      <Sun className={`${styles.switcherSun} sun`} />
    ) : (
      <Moon className={`${styles.switcherMoon} moon`} />
    );

  return (
    <div>
      <button
        aria-label="Toggle dark mode"
        type="button"
        className={`${styles.switcher} switcher`}
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && resolvedTheme ? themeIcon : null}
      </button>
    </div>
  );
}
