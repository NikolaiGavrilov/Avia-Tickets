import Filters from "../Filters/Filters";
import TicketList from "../TicketsList/TicketList";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
        <div className="content">
      <img
        className="plane-logo"
        src="./src/assets/plane-logo.png"
        alt="лого с самолетом"
      ></img>
      <div className="content-flex">
      <Filters />
      <TicketList/>
      </div>
      </div>
    </div>
  );
};

export default MainPage;
