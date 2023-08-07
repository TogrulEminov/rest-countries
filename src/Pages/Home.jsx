import Filter from '../Components/Filter/Filter';
import Search from '../Components/Search/Search';

const Home = () => {
  return (
    <main className="main-section">
      <div className="home-head">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-6">
              <Search />
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-6">
              <Filter/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
