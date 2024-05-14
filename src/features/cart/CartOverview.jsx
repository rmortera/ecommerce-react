import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getTotalCartItems, getTotalCartPrice } from './cartSlice';

function CartOverview() {
  const totalCartItems = useSelector(getTotalCartItems);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className="text-[10px] md:text-base">
      <p className="font-semibold">
        {totalCartItems === 0 && (
          <span className="italic">Your cart is empty</span>
        )}
        {totalCartItems === 1 && (
          <span className="md:text-sm">
            ({totalCartItems}) Subtotal: {formatCurrency(totalCartPrice)}
          </span>
        )}
        {totalCartItems > 1 && (
          <span className="md:text-sm">
            ({totalCartItems}) Subtotal: {formatCurrency(totalCartPrice)}
          </span>
        )}
      </p>
      {totalCartItems >= 1 && (
        <Link to="/cart" className="hover:underline">
          Open cart &rarr;
        </Link>
      )}
    </div>
  );
}

export default CartOverview;
