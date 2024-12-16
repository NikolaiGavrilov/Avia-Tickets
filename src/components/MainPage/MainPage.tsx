import { useState } from "react";
import Filters from "../Filters/Filters";
import TicketList from "../TicketsList/TicketList";
import "./MainPage.scss";

interface FilterState {
  stops: number[];
  currency: "RUB" | "USD" | "EUR";
}

const MainPage: React.FC = () => {
  const [filterState, setFilterState] = useState<FilterState>({ stops: [], currency: "RUB" });

    const handleFilterChange = (newFilterState: FilterState) => {
        setFilterState(newFilterState);
    };

  return (
    <div className="main-page">
      <div className="content">
        <img
          className="plane-logo"
          src="./src/assets/plane-logo.png"
          alt="лого с самолетом"
        ></img>
        <div className="content-flex">
          <Filters onFilterChange={handleFilterChange}/>
          <TicketList filterState={filterState}/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
