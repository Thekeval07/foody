import React from "react";
import drink_1 from '../image/s_1.jpg'
import drink_2 from '../image/v_1.jpg'
import drink_3 from '../image/c_1.jpg'
import drink_4 from '../image/sprite.jpg'
import { Link } from "react-router-dom";
const ColdDrink = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center  mb-50">
        <div className="row card-row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <h1 className="product-name">COLD DRINK</h1>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  {/* <div className="inner"> */}
                    <img
                      src={drink_1}
                      className="card-img img-fluid"
                      width={96}
                      height={350}
                      alt=""
                    />
                  {/* </div> */}
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      MAC & CHEESE
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    3 cheese mac cheese
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$4.50</h3>

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
          <div className="col-md-4 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  {/* <div className="inner"> */}
                    <img
                      src={drink_2}
                      className="card-img img-fluid"
                      width={96}
                      height={350}
                      alt=""
                    />
                  {/* </div> */}
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Fries
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    Tater tots, Masala Waffle fries, Masala Potato Chips, Sweet
                    Potato Fried, Make any of your fries loaded with toppings
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$6.50</h3>
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
          <div className="col-md-4 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  {/* <div className="inner"> */}
                    <img
                      src={drink_3}
                      className="card-img img-fluid"
                      width={96}
                      height={350}
                      alt=""
                    />
                  {/* </div> */}
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Wings
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    WaterMelon, Mango chili lime rub*Z ,carolina bbg, Sweet Thai
                    chili, Lemon Pepper, Mango Haberno, Hot, Hotter,
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
          <div className="col-md-4 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  {/* <div className="inner"> */}
                    <img
                      src={drink_4}
                      className="card-img img-fluid"
                      width={96}
                      height={350}
                      alt=""
                    />
                  {/* </div> */}
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Wings
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    WaterMelon, Mango chili lime rub*Z ,carolina bbg, Sweet Thai
                    chili, Lemon Pepper, Mango Haberno, Hot, Hotter,
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
        </div>
      </div>
    </div>
  );
};

export default ColdDrink;
