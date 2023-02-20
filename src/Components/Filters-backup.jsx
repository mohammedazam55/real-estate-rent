import React, { useState } from "react";

export default function Filters() {
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data
  };
  let filterStyles = {
    margin: "0% auto",
    width: "80%",
    // backgroundColor: "grey",
    borderRadius: "3px",
    border: "2px solid black",
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="search-form row"
      style={filterStyles}
    >
      <div className="col align-self-center">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div className="col align-self-center">
        <label htmlFor="when">When:</label>
        <input
          type="date"
          id="when"
          value={when}
          onChange={(event) => setWhen(event.target.value)}
        />
      </div>
      <div className="col align-self-center">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="col align-self-center">
        <label htmlFor="property-type">Property Type:</label>
        <select
          id="property-type"
          value={propertyType}
          onChange={(event) => setPropertyType(event.target.value)}
        >
          <option value="">Select Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
      </div>
      <div className="col align-self-center">
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
