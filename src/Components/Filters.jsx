import React, { useState } from "react";
import { Typography, TextField, Button, MenuItem } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { PriceRangePicker } from "materialui-price-range-picker";

export default function FilterComponent() {
  const [selectedDateRange, handleDateRangeChange] = useState([null, null]);
  const [selectedPriceRange, handlePriceRangeChange] = useState([0, 100]);
  const [selectedDropdownValue, handleDropdownChange] = useState("");

  const handleDropdownSelect = (event) => {
    handleDropdownChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // handle submit logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Typography variant="h6">Location</Typography>
        <TextField variant="outlined" margin="normal" fullWidth />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">When</Typography>
        <DatePicker
          value={selectedDateRange[0]}
          onChange={(date) =>
            handleDateRangeChange([date, selectedDateRange[1]])
          }
          label="Start Date"
        />
        <DatePicker
          value={selectedDateRange[1]}
          onChange={(date) =>
            handleDateRangeChange([selectedDateRange[0], date])
          }
          label="End Date"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">Price</Typography>
        <PriceRangePicker
          value={selectedPriceRange}
          onChange={handlePriceRangeChange}
          min={0}
          max={100}
          unit="$"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">Property Type</Typography>
        <TextField
          select
          value={selectedDropdownValue}
          onChange={handleDropdownSelect}
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </TextField>
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
