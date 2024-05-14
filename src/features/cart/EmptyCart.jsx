import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="mx-4 mt-3 rounded-md border bg-zinc-200 px-4 py-3 shadow-sm">
      <LinkButton to="/products">&larr; Back to products</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some products!
      </p>
    </div>
  );
}

export default EmptyCart;
