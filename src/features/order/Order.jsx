import { useSelector } from 'react-redux';
import { getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { getOrder } from './orderSlice';
import { useEffect } from 'react';

// export async function loader({ params }) {
//   const order = await getOrder(params.orderId);
//   return order;
// }

function Order() {
  const cart = useSelector(getCart);
  const order = useSelector(getOrder);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(order));
  }, [order]);

  if (!cart.length) return <EmptyCart />;

  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + 1);

  const deliveryIn = calcMinutesLeft(todayDate);

  return (
    <div className="mx-4 mt-3 space-y-8 rounded-md border bg-zinc-200 px-4 py-6 shadow-sm ">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">Order #{order?.[0].id}</h2>
          <h2 className="text-xl font-semibold">
            Here's your order, {username}
          </h2>
        </div>

        <div className="mt-4 text-xs md:text-base">
          <p className="mb-2 font-semibold italic">
            {deliveryIn > 0 ? (
              `Your package is on the way! 📦`
            ) : (
              <span className="rounded-full bg-green-400 px-3 py-1 font-semibold">
                Your package has arrived!
              </span>
            )}
          </p>
          <p>(Estimated delivery: {formatDate(todayDate)})</p>
        </div>
      </div>

      <ul>
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.id}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.totalPrice}
            //date={cart.date}
          />
        ))}
      </ul>
      <p className="font-bold">Total: {formatCurrency(totalCartPrice)}</p>
    </div>
  );
}

export default Order;
