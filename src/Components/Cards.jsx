import React from "react";

export default function Cards() {
  let dataItems = [
    {
      price: "$2,095",
      name: "Palm Harbor",
      location: "2699 Green Valley, Highland Lake, ",
      state: "FL",
      beds: "3 Beds",
      bathrooms: "2 Bathrooms",
      size: "5x7m",
      link: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      price: "$4,550",
      name: "Faulkner Ave",
      location: "909 Woodland St. Michigan, ",
      state: "IN",
      beds: "4 Beds",
      bathrooms: "3 Bathrooms",
      size: "8x10m",
      link: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      price: "$2,700",
      name: "Beverly Springfield",
      location: "2821 Lake Sevilla, Palm Harbor, ",
      state: "TX",
      beds: "4 Beds",
      bathrooms: "2 Bathrooms",
      size: "6x7.5m",
      link: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      price: "$4,550",
      name: "Faulkner Ave",
      location: "909 Woodland St. Michigan, ",
      state: "IN",
      beds: "4 Beds",
      bathrooms: "3 Bathrooms",
      size: "8x10m",
      link: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      price: "$2,095",
      name: "Palm Harbor",
      location: "2699 Green Valley, Highland Lake, ",
      state: "FL",
      beds: "3 Beds",
      bathrooms: "2 Bathrooms",
      size: "5x7m",
      link: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      price: "$2,700",
      name: "Beverly Springfield",
      location: "2821 Lake Sevilla, Palm Harbor, ",
      state: "TX",
      beds: "4 Beds",
      bathrooms: "2 Bathrooms",
      size: "6x7.5m",
      link: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      price: "$2,400",
      name: "St. Crystal",
      location: "210 US Highway, Highland Lake, ",
      state: "FL",
      beds: "4 Beds",
      bathrooms: "2 Bathrooms",
      size: "6x8m",
      link: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      price: "$1,500",
      name: "Cove Red",
      location: "243 Curlew Road, Palm Harbor, ",
      state: "TX",
      beds: "2 Beds",
      bathrooms: "1 Bathrooms",
      size: "5x7.5m",
      link: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      price: "$1,600",
      name: "Tarpon Bay",
      location: "103 Lake Shores, Michigan, ",
      state: "IN",
      beds: "3 Beds",
      bathrooms: "1 Bathrooms",
      size: "5x7m",
      link: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  let styles = { margin: "0% auto", width: "81%" };
  return (
    <div style={styles} className="my-2 row">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {dataItems.map((item, index) => (
            <div className="col mb-4" key={index}>
              <div className="card h-100">
                <img src={item.link} className="card-img-top" alt="..." />
                <div className="card-body">
                  <button
                    style={{
                      fontSize: "18px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "1px solid grey",
                      color: "#7065f0",
                      float: "right",
                    }}
                  >
                    <i className="fa fa-heart-o"></i>
                  </button>
                  <h4 className="card-title" style={{ color: "#7065f0" }}>
                    {item.price}
                    <span style={{ color: "black" }}>/month</span>
                  </h4>
                  <h4 className="fw-bold ">{item.name}</h4>
                  <p className="card-text mb-3">{item.location + item.state}</p>
                  <div
                    class="mb-3"
                    style={{ borderBottom: "1px solid grey" }}
                  ></div>
                  <div className="d-flex align-items-center">
                    <i
                      style={{ fontSize: "18px", color: "#7065f0" }}
                      className="fa fa-bed mx-2"
                    ></i>
                    <span>{item.beds}</span>
                    <i
                      style={{ fontSize: "18px", color: "#7065f0" }}
                      className="fa fa-bath mx-2"
                    ></i>
                    <span>{item.bathrooms}</span>
                    <i
                      style={{ fontSize: "18px", color: "#7065f0" }}
                      className="fa fa-expand mx-2"
                    ></i>
                    <span>
                      {item.size}
                      <sup>2</sup>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
