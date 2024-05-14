function OrderItem({ quantity, title }) {
  return (
    <li>
      <div className="text-xs md:text-sm">
        <p>
          <span>{quantity}&times;</span> {title}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
