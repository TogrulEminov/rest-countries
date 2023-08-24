import { useContext, useEffect } from "react";
import { mainContext } from "../utils/Context";
import BackBtn from "../Components/BackBtn/BackBtn";
import DetailCard from "../Components/DetailCard/DetailCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const Detail = () => {
  const { theme, detail, setDetail, setLoading, } =
    useContext(mainContext);
  const { cca3 } = useParams();

  const getDetailData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/` + cca3
      );
        setDetail(response.data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDetailData();
  }, [cca3]);
  return (
    <main className="main-section" data-theme={theme}>
      <div className="container">
          <>
            <BackBtn />
            <DetailCard />
          </>
      </div>
    </main>
  );
};

export default Detail;
