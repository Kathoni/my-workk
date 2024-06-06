import Myimage from "../assets/images/banner.jpeg";
import Ours from "../assets/images/ourabout.jpeg";
function AboutUs() {
  return (
    <div>
      <div className="myabout">
        <img src={Ours} alt="" />
        <br />
      </div>
      <div className="about">
        <div className="container">
          <div className="card">
            <div className="card-shadow">
              <h1>About us</h1>
              <h2>We are a world operating company ;</h2>
              <p>
                We offer services based on any geographical <br />
                area you may be in.
              </p>
              <h1>You request and we deliver.</h1>
              <p>
                On our long journey we have been able to meet several different
                people with different tastes
                <br />
                but all in all we have been able to satisfy them with our unique
                and <br />
                designs.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-shadow">
              <h1>About our services</h1>
              <h3>
                We offer a wide variety of serviced it just depends on what you
                want.
              </h3>
              <h4> Here are some of the things we offer;</h4>
              <div className="List">
                <ul>
                  <li>Wallpaper installation.</li>
                  <li>Kitchen makeover</li>
                  <li>Bedroom design</li>
                  <li>Living room design</li>
                  <li>Office design</li>
                  <li>Studio appartment design</li>
                </ul>
                <h4>
                  Our list is endless but we assure you we meet our clients
                  expectations.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Myimage} alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
