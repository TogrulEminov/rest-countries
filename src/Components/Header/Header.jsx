import { Link } from "react-router-dom";
import "./Header.scss";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { mainContext } from "../../utils/Context";
const Header = () => {
  const { mode, changeMode, trueMode } = useContext(mainContext);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <article>
              <Link to="/" className="header-link">
                Where in the world?
              </Link>
            </article>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="lightDark">
              <button onClick={changeMode}>{mode}</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
