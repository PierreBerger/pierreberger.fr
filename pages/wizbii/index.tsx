import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {
    window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  });
  return <></>;
}
