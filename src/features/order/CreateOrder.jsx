import { useNavigate, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { addOrder } from './orderSlice';
import { useState } from 'react';

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str,
//   );

function CreateOrder() {
  const [customer, setCustomer] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submiting';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  let newOrder;

  function handleAddToOrder() {
    newOrder = {
      id: Math.floor(Math.random() * 10),
      customer,
      email,
      address,
      cart,
    };
    dispatch(addOrder(newOrder));

    navigate(`/order/${newOrder.id}`);
  }

  return (
    <>
      <div className="mx-4 mt-3 rounded-md border bg-zinc-200 px-6 py-6 shadow-sm md:w-full">
        <h2 className="mb-8 text-xl font-semibold">
          Ready to order? Let's go!
        </h2>

        <form onSubmit={handleAddToOrder}>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Full Name</label>
            <div className="grow">
              <input
                type="text"
                name="customer"
                required
                className="input w-full"
                defaultValue={username}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">E-mail</label>
            <div className="grow">
              <input
                type="email"
                name="email"
                required
                className="input w-full"
                value={email}
                //pattern=".+@example\.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Address</label>
            <div className="grow">
              <input
                type="text"
                name="address"
                required
                className="input w-full"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />

            <Button
              onClick={handleAddToOrder}
              type="primary"
              disabled={isSubmiting}
            >
              {isSubmiting ? 'Placing order...' : 'Checkout'}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateOrder;
