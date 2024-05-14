import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      {isLoading && <Loading />}

      <Header />

      <div className="overflow-scroll">
        <main className="md:max-w-3/4 mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
