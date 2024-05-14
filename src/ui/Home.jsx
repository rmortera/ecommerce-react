import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex items-center justify-center">
      <div className="my-10 px-4 text-center sm:my-16">
        <h1 className="mb-8  text-xl font-semibold md:text-6xl">
          Your favorite products.
          <br />
          <span className="text-slate-500">Discover the best offers.</span>
        </h1>

        {username === '' ? (
          <CreateUser />
        ) : (
          <Button to="/products" type="primary">
            continue shopping, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
