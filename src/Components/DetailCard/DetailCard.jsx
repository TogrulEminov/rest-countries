import React, { useContext } from "react";
import "./DetailCard.scss";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { mainContext } from "../../utils/Context";
import Spinner from "../../Spinner/Spinner";
const DetailCard = () => {
  const { detail } = useContext(mainContext);

  return (
    <div className="detail-card">
      {detail?.length > 0 ? (
        <div className="row">
          {detail?.map((c, index) => {
            const {
              flags,
              name,
              currencies,
              capital,
              region,
              subregion,
              languages,
              borders,
              timezones,
              area,
              population,
            } = c;
            const firstNativeNameKey = Object.keys(name?.nativeName)?.[0];
            const firstnativeNameName =
              name?.nativeName[firstNativeNameKey]?.common;
            const firstCurrencyKey = Object.keys(currencies)?.[0];
            const firstCurrencyName = currencies[firstCurrencyKey]?.name;
            const firstLanguageKey = Object.keys(languages)?.[0];
            const firstLanguageName = languages[firstLanguageKey];
            return (
              <React.Fragment key={index}>
                <div className="col-12 col-lg-6">
                  <figure className="detail-image">
                    <img src={flags?.png} alt={flags?.alt} />
                  </figure>
                </div>
                <div className="col-12 col-lg-6">
                  <article className="detail-information">
                    <h2> {name?.common}</h2>
                    <div className="all-list">
                      <ul>
                        <li>
                          <h4>Native Name:</h4>
                          <span>{firstnativeNameName}</span>
                        </li>
                        <li>
                          <h4>Population:</h4>
                          <CountUp duration={5} end={population} />
                        </li>
                        <li>
                          <h4>Region:</h4>
                          <span>{region}</span>
                        </li>
                        <li>
                          <h4>Sub Region:</h4>
                          <span>{subregion}</span>
                        </li>
                        <li>
                          <h4>Capital:</h4>
                          <span>{capital}</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <h4>Time Zones:</h4>
                          <span>{timezones}</span>
                        </li>
                        <li>
                          <h4>Currencies:</h4>
                          <span>{firstCurrencyName}</span>
                        </li>
                        <li>
                          <h4>Area</h4>
                          <span>{area}</span>
                        </li>
                        <li>
                          <h4>Language:</h4>
                          <span>{firstLanguageName}</span>
                        </li>
                      </ul>
                    </div>
                    {borders ? (
                      <div className="borders">
                        <h4>Borders:</h4>
                        <ul>
                          {borders?.map((border) => {
                            return (
                              <li key={border}>
                                <Link to={`/country/${border}`} value={border}>
                                  {border}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      <></>
                    )}
                  </article>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default DetailCard;
