import { useContext } from 'react';
import Cart from '../Components/Cart/Cart';
import Filter from '../Components/Filter/Filter';
import Search from '../Components/Search/Search';
import { mainContext } from '../utils/Context';

const Home = () => {
  const { data, quantity,  setQuantity,loading } = useContext(mainContext);
  return (
    <main className="main-section">
      <div className="home-head">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-6">
              <Search />
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-6">
              <Filter />
            </div>
          </div>
          <div className="all-card">
            <div className="row">
              {data?.slice(0, quantity).map((item) => {
                console.log();
                return (
                  <div
                    key={item?.cca3}
                    className="col-12 col-lg-3 col-md-4 col-sm-6">
                    <Cart item={item} />
                  </div>
                );
              })}
            </div>
            {quantity < data.length && (
              <div className="loadMoreBtn">
                <button onClick={() => setQuantity((e) => e + 50)}>
               {loading ? "Loading" :"Load More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
