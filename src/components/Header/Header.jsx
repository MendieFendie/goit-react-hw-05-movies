import css from './Header.module.css';
import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';

export default function Header() {
  return (
    <header className={css.header}>
      <Home />
      <Movies />
    </header>
  );
}
