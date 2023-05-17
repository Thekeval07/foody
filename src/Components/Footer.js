import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <section className="">
          <footer
            className="footer text-black text-center text-md-start"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <div className="container p-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase ">Content Us</h5>
                  <p>
                  Food feeds both the body and soul 
                  – there are clear reasons to eat a balanced diet, but there are also reasons you cling to your mom’s secret chicken noodle soup recipe when you’re sick.
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Contact</h5>
                  <ul className="list-unstyled ">
                    <li>
                      <a href="#!" className="text-black">
                        Email: k@foody.com
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">
                         Phone:  9857458963
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">
                        Address: New York, NY 10012, US
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase ">Useful links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text">
                      Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text">
                      Settings
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text">
                      Orders
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text">
                      Help
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center p-3">
              © 2023 Copyright:
              <a className="text-black">
                @metizsoft.com
              </a>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Footer;
