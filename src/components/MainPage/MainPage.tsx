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
      <TicketList/>
      </div>
    </div>
  );
};

export default MainPage;
