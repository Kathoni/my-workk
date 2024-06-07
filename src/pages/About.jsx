import React from "react";
import Myimage from "../assets/images/banner.jpeg";

function About() {
  return (
    <>
      <div
        className="container-fluid mb-3 d-flex flex-column align-items-center justify-content-center text-center mx-auto"
        style={{ height: "50vh", backgroundColor: "#f4eae8" }}
      >
        <div className="text-center">
          <h3 className=" fs-1">As we evolve, our homes should, too</h3>
        </div>
      </div>

      <section className="container py-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3">
            <h4 className="text-decoration-underline">About Us</h4>
            <p className="fst-italic">
              We are a world operating company. You request and we deliver.
            </p>
            <p></p>
            <p>
              We offer services based on any geographical area you may be in.{" "}
              <br /> On our long journey we have been able to meet several
              different people with different tastes but all in all we have been
              able to satisfy them with our unique and designs.
            </p>
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <img src={Myimage} alt="" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
