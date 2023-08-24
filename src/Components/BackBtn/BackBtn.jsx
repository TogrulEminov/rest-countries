import React, { useContext, useState } from "react";
import "./BackBtn.scss";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineCloseCircle } from "react-icons/ai";
import { mainContext } from "../../utils/Context";
import { useNavigate } from "react-router-dom";
const BackBtn = () => {
  const { theme, detail } = useContext(mainContext);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <div className="back-and-modal">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 col-sm-6">
            <button
              className="back-btn"
              data-theme={theme}
              onClick={() => navigate("/")}
            >
              <AiOutlineArrowLeft />
              <span>Back</span>
            </button>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-6">
            <article>
              <button
                className="modal-btn"
                data-theme={theme}
                onClick={() => setModal(true)}
              >
                Modal
              </button>
            </article>
          </div>
        </div>
      </div>
      {detail?.map((item) => {
        const { maps, name, flags, borders } = item;
        return (
          <div
            key={item?.cca3}
            className={`${
              modal
                ? "country-modal-content active-modal"
                : "country-modal-content"
            }`}
          >
            <div className="modal-header">
              <h2>{name?.official}</h2>
              <button onClick={() => setModal(false)}>
                {" "}
                <AiOutlineCloseCircle />
              </button>
            </div>
            <div className="modal-body">
              {borders?.length > 0 ? (
                <p data-theme={theme}>
                  {borders?.length} sərhəd nöqtəsi vardır
                </p>
              ) : (
                <p style={{ color: "red" }}>Sərhəd nöqtəsi yoxdur...</p>
              )}
              <article>
                <img src={flags?.png} alt={flags?.alt} />
                <Link to={`${maps?.googleMaps}`} target="_blank">
                  Xəritədən bax
                </Link>
              </article>
            </div>
          </div>
        );
      })}
      <div
        onClick={() => setModal(false)}
        className={`${
          modal ? "overlay-modal active-overlay" : "overlay-modal"
        }`}
      ></div>
    </div>
  );
};

export default BackBtn;
