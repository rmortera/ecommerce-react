import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import CartOverview from '../features/cart/CartOverview';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-zinc-300 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="text-[10px] tracking-widest md:text-base">
        E-Commerce React
        <Username />
      </Link>

      {/* <SearchOrder /> */}

      <CartOverview />
    </header>
  );
}

export default Header;
