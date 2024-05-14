import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { getUsername } from '../user/userSlice';
import EmptyCart from './EmptyCart';
import Subtotal from './Subtotal';

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-4 mt-3 rounded-md border bg-zinc-200 px-4 py-3 shadow-sm">
      <LinkButton to="/products">&larr; Back to products</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, <span className="capitalize">{username}</span>
      </h2>

      <ul className="mt-3 divide-y divide-zinc-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="md:flex md:flex-row-reverse md:items-center md:justify-between">
        <div className="mt-6 grid place-items-end">
          <Subtotal />
        </div>

        <div className="mt-6 space-x-2">
          <Button to="/order/new" type="primary">
            Order products
          </Button>

          <Button type="secondary" onClick={() => dispatch(clearCart())}>
            Clear cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
