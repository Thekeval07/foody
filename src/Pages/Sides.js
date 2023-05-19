import React from "react";
import sides1 from "../image/side_1.jpg";
import sides2 from "../image/side_2.jpg";
import sides3 from "../image/salad3.jpg";
import { Link } from "react-router-dom";
const Sides = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center  mb-50">
        <div className="row card-row">
        
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
          <h1 className="product-name">SIDES</h1>
          </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/14c02f3d-eaa0-4df1-910d-de1c1540783d/5add974f-9506-4f0f-ac2f-4d21846dafc2'>
              <div className="card-body">
                <div className="card-img-actions">
                {/* <div className="inner"> */}
                  <img
                    src={sides1}
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
                <Link to='https://www.toasttab.com/homekitchen/v3/add/14c02f3d-eaa0-4df1-910d-de1c1540783d/5add974f-9506-4f0f-ac2f-4d21846dafc2' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/f3835752-2a1d-4c67-9725-ead6fab62097/5add974f-9506-4f0f-ac2f-4d21846dafc2'>
              <div className="card-body">
                <div className="card-img-actions">
                {/* <div className="inner"> */}
                  <img
                    src={sides2}
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
                <Link to='https://www.toasttab.com/homekitchen/v3/add/f3835752-2a1d-4c67-9725-ead6fab62097/5add974f-9506-4f0f-ac2f-4d21846dafc2' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3#ddb6dca17-9034-4091-8309-6ff832f19f1bdc8d9cdbf-617d-4fea-8438-fe8b14219a48'>
              <div className="card-body">
                <div className="card-img-actions">
                {/* <div className="inner"> */}
                  <img
                    src={sides3}
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
                    WaterMelon, Mango chili lime rub*Z ,carolina bbg,
                    Sweet Thai chili, Lemon Pepper, Mango Haberno, Hot, Hotter,
                    
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$15.00</h3>
                <div>
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                </div>

                <Link to='https://www.toasttab.com/homekitchen/v3#ddb6dca17-9034-4091-8309-6ff832f19f1bdc8d9cdbf-617d-4fea-8438-fe8b14219a48' type="button" className="btn btn-outline-dark" >
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

export default Sides;
