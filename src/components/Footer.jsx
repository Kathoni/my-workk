import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/Links";
import { partners } from "../data/footer";
import Logo from "../assets/images/logo.jpeg";

function Footer() {
  return (
    <>
      <footer
        className="container-fluid py-3 border-top mt-3"
        style={{ backgroundColor: "#6b8e23" }}
      >
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-3">
            <img src={Logo} alt="" className="img-fluid" />
            <h5 className="mt-2">Authentic Interior Design</h5>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            <h5>Links</h5>
            <hr />
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-white"
                  to={publicLinks?.Landing}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-white"
                  to={publicLinks?.About}
                >
                  About
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-white"
                  to={publicLinks?.Team}
                >
                  Team
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-white"
                  to={publicLinks?.Contact}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            <h5>Partners</h5>
            <hr />

            <ul className="nav flex-column">
              {partners?.map((partner) => (
                <>
                  <li className="nav-item mb-2">
                    <Link
                      className="nav-link p-0 text-white"
                      key={partner?.id}
                      target="_blank"
                      to={partner?.link}
                    >
                      {partner?.name}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
