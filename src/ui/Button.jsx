import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-zinc-600 font-semibold uppercase tracking-wide text-zinc-100 transition-colors duration-300 hover:bg-zinc-500 focus:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm rounded-full font-semibold uppercase tracking-wide text-zinc-100 transition-colors duration-300 hover:bg-zinc-300 focus:bg-zinc-500 focus:outline-none focus:ring focus:ring-zinc-200 focus:ring-offset-2 disabled:cursor-not-allowed text-zinc-400 border-2 border-zinc-300 px-4 py-2.5 md:px-6 md:py-3.5 hover:text-zinc-800 focus:text-zinc-800',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
