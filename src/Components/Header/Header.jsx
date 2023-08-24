import { Link } from "react-router-dom";
import "./Header.scss";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { mainContext } from "../../utils/Context";
import { GiWorld} from "react-icons/gi";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { switchTheme, theme } = useContext(mainContext);
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
    <header
      className={`main-header ${scrolled ? "sticky-header" : ""}`}
      data-theme={theme}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <article>
              <Link to="/" className="header-link" data-theme={theme}>
                Where in the world?
              </Link>
            </article>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="lightDark">
              <button data-theme={theme} onClick={switchTheme}>
                <GiWorld/>
                {theme}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
