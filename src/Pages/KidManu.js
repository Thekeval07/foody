import React from 'react'
import burger_sliders from '../image/burger2.jpg'
import chicken_sliders from '../image/chiken1.jpg'
import { Link } from "react-router-dom";

const KidManu = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center  mb-50">
        <div className="row card-row">
        <h1 className="product-name">KID MENU</h1>
          <div className="col-md-4 mt-2">
          
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/77bba549-c0cf-4106-8ef0-90332f997dca/880a245f-97ff-420f-916f-9a7587001e8a'>
              <div className="card-body">
                <div className="card-img-actions">
                  
                  <img
                    src={burger_sliders}
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
                      Burger Slider  
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    Deep fried chicken sandwich marinted in buttermilk, and lettuce, tomato and mayo
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$14.00</h3>

                <div>
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                  <i className="fa fa-star star" />
                </div>
                <Link to='https://www.toasttab.com/homekitchen/v3/add/77bba549-c0cf-4106-8ef0-90332f997dca/880a245f-97ff-420f-916f-9a7587001e8a' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/692ed163-e20e-4400-8e2f-c3b36425682f/880a245f-97ff-420f-916f-9a7587001e8a'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={chicken_sliders}
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
                      Chicken Slider 
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
                <Link to='https://www.toasttab.com/homekitchen/v3/add/692ed163-e20e-4400-8e2f-c3b36425682f/880a245f-97ff-420f-916f-9a7587001e8a' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          
          
          

        </div>
      </div>
    </div>
  )
}

export default KidManu