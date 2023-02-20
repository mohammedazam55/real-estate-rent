import React from "react";

export default function SearchBar() {
  let filterStyles = {
    margin: "0% auto",
    width: "80%",
  };
  return (
    <div style={filterStyles}>
      <div className="row my-4">
        <div className="col-md-8">
          <h2>Search properties to rent</h2>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control {dd}"
            placeholder="Search with SearchBar"
          />
        </div>
      </div>
    </div>
  );
}
