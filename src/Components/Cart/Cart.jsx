import './Cart.scss';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
const Cart = ({ item }) => {
  return (
    <Link to="" className="card">
      <div className="card-header">
        <figure>
          <img src={item?.flags.png} alt={item?.flags?.alt} />
        </figure>
      </div>
      <div className="card-body">
        <article>
          <h3>{item?.name.common}</h3>
          <h4>
            Population: <CountUp duration={5} end={item?.population} />
          </h4>
          <h4>
            Region: <span>{item?.region}</span>
          </h4>
          <h4>
            Capital: <span>{item?.capital}</span>
          </h4>
        </article>
      </div>
    </Link>
  );
};

export default Cart;
