import { useState } from "react";
import "./Filters.scss";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

interface FilterProps {
  onFilterChange: (filterState: {
    stops: number[];
    currency: "RUB" | "USD" | "EUR";
  }) => void;
}

const Filters: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<
    "RUB" | "USD" | "EUR"
  >("RUB");

  const handleCurrencyChange = (currency: "RUB" | "USD" | "EUR") => {
    setSelectedCurrency(currency);
    onFilterChange({ stops: selectedStops, currency });
  };

  const handleStopChange = (stops: number) => {
    if (selectedStops.includes(stops)) {
      setSelectedStops(selectedStops.filter((s) => s !== stops));
    } else {
      setSelectedStops([...selectedStops, stops]);
    }
    onFilterChange({
      stops: selectedStops.includes(stops)
        ? selectedStops.filter((s) => s !== stops)
        : [...selectedStops, stops],
      currency: selectedCurrency,
    });
  };

  const handleSelectAll = () => {
    setSelectedStops([]);
    onFilterChange({ stops: [], currency: selectedCurrency });
  };

  return (
    <div className="filters">
      <div className="currency-filters">
        <p className="filters-text">Валюта</p>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button
            className="currency-btn"
            onClick={() => handleCurrencyChange("RUB")}
            variant={selectedCurrency === "RUB" ? "contained" : "outlined"}
          >
            RUB
          </Button>
          <Button
            className="currency-btn"
            onClick={() => handleCurrencyChange("USD")}
            variant={selectedCurrency === "USD" ? "contained" : "outlined"}
          >
            USD
          </Button>
          <Button
            className="currency-btn"
            onClick={() => handleCurrencyChange("EUR")}
            variant={selectedCurrency === "EUR" ? "contained" : "outlined"}
          >
            EUR
          </Button>
        </ButtonGroup>
      </div>
      <div className="stops-filters">
        <p className="filters-text">Количество пересадок</p>
        <FormGroup>
          <FormControlLabel
            className="stops-checkbox"
            control={
              <Checkbox
                checked={selectedStops.length === 0}
                onChange={handleSelectAll}
              />
            }
            label="Все"
          />
          <FormControlLabel
            className="stops-checkbox"
            control={
              <Checkbox
                checked={selectedStops.includes(0)}
                onChange={() => handleStopChange(0)}
              />
            }
            label="Без пересадок"
          />
          <FormControlLabel
            className="stops-checkbox"
            control={
              <Checkbox
                checked={selectedStops.includes(1)}
                onChange={() => handleStopChange(1)}
              />
            }
            label="1 пересадка"
          />
          <FormControlLabel
            className="stops-checkbox"
            control={
              <Checkbox
                checked={selectedStops.includes(2)}
                onChange={() => handleStopChange(2)}
              />
            }
            label="2 пересадки"
          />
          <FormControlLabel
            className="stops-checkbox"
            control={
              <Checkbox
                checked={selectedStops.includes(3)}
                onChange={() => handleStopChange(3)}
              />
            }
            label="3 пересадки"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Filters;
