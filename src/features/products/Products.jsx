import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../../services/apiProducts';
import { useEffect, useState } from 'react';
import ProductsItem from './ProductsItem';

function Products() {
  const products = useLoaderData();
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await fetch('https://fakestoreapi.com/products/categories');

      if (!res.ok) throw Error('Failed getting products');

      const data = await res.json();
      setCategories(data);
    }
    getCategories();
  }, []);

  let filteredProducts;

  if (category === '') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category,
    );
  }

  return (
    <div className="mt-4">
      <div className="mx-4 flex items-center justify-center">
        <div className="text-xs md:text-base">
          <p>Categories: </p>
        </div>
        <select
          value={category.name}
          onChange={(e) => setCategory(e.target.value)}
          className="mx-4 w-28 rounded-full border bg-zinc-100 px-4 py-2 text-[10px] transition-all duration-300 placeholder:text-zinc-400 focus:outline-none focus:ring focus:ring-zinc-500  focus:ring-opacity-50 sm:w-64 md:text-base"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>

      <ul className="m-4 grid grid-cols-2 grid-rows-10 gap-4 md:grid-cols-3 md:grid-rows-5">
        {filteredProducts.map((item) => (
          <ProductsItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Products;
