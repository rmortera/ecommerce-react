import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { getTotalCartItems, getTotalCartPrice } from './cartSlice';

function Subtotal() {
  const totalCartItems = useSelector(getTotalCartItems);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className="text-xs md:text-base">
      <p className="font-semibold">
        {totalCartItems === 0 && (
          <span className="italic">Your cart is empty</span>
        )}
        {totalCartItems === 1 && (
          <span className="md:text-sm">
            ({totalCartItems} Product) Subtotal:{' '}
            {formatCurrency(totalCartPrice)}
          </span>
        )}
        {totalCartItems > 1 && (
          <span className="md:text-sm">
            ({totalCartItems} Products) Subtotal:{' '}
            {formatCurrency(totalCartPrice)}
          </span>
        )}
      </p>
    </div>
  );
}

export default Subtotal;
