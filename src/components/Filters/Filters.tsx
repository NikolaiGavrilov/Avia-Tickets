import React from "react";
import "./Filters.scss";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const Filters = () => {
  return (
    <div className="filters">
      <div className="currency-filters">
        <p className="filters-text">Валюта</p>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button className="currency-btn">RUB</Button>
          <Button className="currency-btn">USD</Button>
          <Button className="currency-btn">EUR</Button>
        </ButtonGroup>
      </div>
      <div className="stops-filters">
        <p className="filters-text">Количество пересадок</p>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Все" />
          <FormControlLabel
            control={<Checkbox />}
            label="Без пересадок"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="1 пересадка"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="2 пересадки"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="3 пересадки"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Filters;
