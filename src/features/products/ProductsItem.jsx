import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { useRef } from 'react';
import Modal from '../../ui/Modal';

function ProductsItem({ item }) {
  const modal = useRef();
  const { id, title, description, price, image, rating } = item;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      id: id,
      title,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }

  function handleOnClick() {
    modal.current.open();
    return;
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <div className="flex grow flex-col items-center p-4">
          <img
            src={image}
            alt={title}
            className="mb-4 h-32 drop-shadow-md md:h-64"
          />
          <p className="my-4 text-[12px] font-semibold md:text-xl">{title}</p>
          <p className="text-[10px] md:text-xl">{description}</p>
        </div>
        <div className="mb-2 mt-6 flex flex-col items-center justify-between">
          <p className="mb-4 text-xl">{formatCurrency(price)}</p>

          {isInCart && (
            <div className="flex items-center gap-6 md:gap-4">
              <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
              <DeleteItem id={id} />
            </div>
          )}

          {!isInCart && (
            <Button type="primary" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </Modal>

      <li className="h-34 max-w-34 flex flex-col rounded-md border p-2 shadow-sm transition delay-150 ease-in-out hover:scale-105 md:max-w-64">
        <div className="mb-4 flex items-center justify-end gap-2 text-sm">
          <svg
            width="12px"
            height="12px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p>{rating.rate}/5</p>
        </div>
        <button
          onClick={handleOnClick}
          className="flex grow flex-col items-center"
        >
          <img src={image} alt={title} className="mb-4 h-32" />

          <p className="text-xs font-semibold">{title}</p>
          {/* <p className="text-xs">{description}</p> */}
        </button>
        <div className="mb-2 mt-6 flex flex-col items-center justify-between">
          <p className="mb-4">{formatCurrency(price)}</p>

          {isInCart && (
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
              <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
              <DeleteItem id={id} />
            </div>
          )}

          {!isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </li>
    </>
  );
}

export default ProductsItem;
