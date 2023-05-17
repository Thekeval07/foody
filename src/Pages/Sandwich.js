import React from "react";
import sandwich1 from "../image/sandwich_1.jpg";
import sandwich2 from "../image/sandwich_2.jpg"
import sandwich3 from "../image/sandwich_3.jpg";
import sandwich4 from "../image/sandwich3.jpg"
import sandwich5 from "../image/sandwich4.jpg";
import { Link } from "react-router-dom";

const Sandwich = () => {
  return (
    <div>
       <div className="container d-flex justify-content-center  mb-50"> 
        <div className="row card-row">
        <h1 className="product-name">SANDWICH</h1>
          <div className="col-md-4 mt-2">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  
                  <img
                    src={sandwich1}
                    className="card-img img-fluid"
                    width={96}
                    height={350}
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      The Southern Damsel
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    Deep fried chicken sandwich marinted in buttermilk, and
                    lettuce, tomato and mayo
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$14.00</h3>

                <div>
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                </div>
                <Link to='https://www.toasttab.com/homekitchen/v3' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={sandwich2}
                    className="card-img img-fluid"
                    width={96}
                    height={350}
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Buffalo Chicken Grill Cheese
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    smoked chicken signature buffalo sauce and american cheess
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$14.00</h3>
                <div>
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                </div>
                <Link to='https://www.toasttab.com/homekitchen/v3' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={sandwich3}
                    className="card-img img-fluid"
                    width={96}
                    height={350}
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Eastem
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    smoked pull pork with "carolina" style mustarn/vinegar and
                    red pepper sauce, served on a brioche roll, wit colesaw
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$15.00</h3>
                <div>
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                </div>

                <Link to='https://www.toasttab.com/homekitchen/v3' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={sandwich4}
                    className="card-img img-fluid"
                    width={96}
                    height={350}
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      cowbor brisket
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    smoked krisket seared with nonons, green pepper cheese,
                    served on a sub rolleither with gravy, or you choose
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$14.00</h3>
                <div>
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                </div>

                <Link to='https://www.toasttab.com/homekitchen/v3' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={sandwich5}
                    className="card-img img-fluid"
                    width={96}
                    height={350}
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      The Tandoori
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    Chicken marrinated ginger, garlic, homemade spices, topped
                    with lettuce, tommato, onion, cheese, adn zesty chutney{" "}
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$14.00</h3>
                <div>
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                </div>

                <Link to='https://www.toasttab.com/homekitchen/v3' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div> 
   </div>
  );
};

export default Sandwich;
