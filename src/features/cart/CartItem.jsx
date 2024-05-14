import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { id, title, quantity, price } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="py-3 md:flex md:items-center md:justify-between md:gap-32">
      <p className="mb-1 text-xs sm:mb-0 md:text-base">
        <span className="text-sm italic">{quantity}&times;</span> {title}
      </p>
      <div className="flex items-center justify-between md:gap-6">
        <div>
          <p className="text-xs font-bold md:text-base">
            {formatCurrency(price)}
          </p>
        </div>
        <div className="flex items-center justify-between gap-1 sm:gap-6">
          <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
          <DeleteItem id={id} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
