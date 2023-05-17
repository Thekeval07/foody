import React from 'react'
import garden from '../image/salad2.jpg'
import mix_green from '../image/salad3.jpg'
import { Link } from "react-router-dom";

const Salad = () => {
  return (
<div>
<div className="container d-flex justify-content-center  mb-50">
        <div className="row card-row">
        <h1 className="product-name">SALAD</h1>
          <div className="col-md-4 mt-2">
          
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  
                  <img
                    src={garden}
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
                    src={mix_green}
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
          
          
          

        </div>
      </div>
</div>
  )
}

export default Salad