import React from "react";

export default function Header() {
  let linkStyle = {
    textDecoration: "none",
  };
  return (
    <nav className="navbar navbar-expand-lg my-2">
      <div className="container-fluid">
        <a href="http://" style={linkStyle}>
          <img src={require("../sale.png")} alt="ERROR!" width={"50px"} />
          {/* <i style={{ fontSize: "24px" }} class="fas">
            &#xf015;
          </i> */}

          <span>Estatery</span>
        </a>
        <div class="collapse navbar-collapse mx-5" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="http://">
                Rent
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="http://">
                Buy
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="http://">
                Sell
              </a>
            </li>
            <li class="nav-item dropdown mx-3">
              <a
                class="nav-link dropdown-toggle"
                href="http://"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage Property
              </a>
              <ul class="dropdown-menu mx-3">
                <li>
                  <a class="dropdown-item" href="http://">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="http://">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="http://">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="http://"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="http://">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="http://">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="http://">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-light me-md-2" type="button">
            Login
          </button>
          <button
            class="btn text-light"
            style={{ backgroundColor: "#7065f0" }}
            type="button"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
