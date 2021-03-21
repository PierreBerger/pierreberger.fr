import styles from '@components/dark-mode-switcher.module.scss';
import Moon from '@icons/moon.svg';
import Sun from '@icons/sun.svg';

function switchTheme() {
  if (typeof window !== 'undefined' && document !== null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.toggle('light');
    } else {
      document.body.classList.toggle('dark');
    }
  }
}

export default function DarkModeSwitcher() {
  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      className={`${styles.switcher} switcher`}
      onClick={() => {
        switchTheme();
      }}
    >
      <Moon className={`${styles.switcherMoon} moon`} />
      <Sun className={`${styles.switcherSun} sun`} />
    </button>
  );
}
