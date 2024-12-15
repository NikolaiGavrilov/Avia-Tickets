import TicketList from "../TicketsList/TicketList";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div>
      <img
        className="plane-logo"
        src="./src/assets/plane-logo.png"
        alt="лого с самолетом"
      ></img>
      <TicketList />
    </div>
  );
};

export default MainPage;
