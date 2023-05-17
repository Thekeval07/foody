import React from "react";
import bur1 from "../image/burger_1.jpg";
import bur2 from "../image/burger2.jpg";
import bur3 from "../image/burger_3.jpg";
import bur4 from "../image/burger_4.jpg";
import bur5 from "../image/burger_5.jpg";
import bur6 from "../image/b6.jpg";
import { Link } from "react-router-dom";



const Burger = () => {
  
  return (
    <div>
      <div className="container d-flex justify-content-center  mb-50">
        <div className="row card-row">
          <h1 className="product-name">BURGER</h1>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
              <Link to='https://www.toasttab.com/homekitchen/v3'>
             
              <div className="card-body">
                <div className="card-img-actions">
                  {/* <div className="inner"> */}
                    <img
                      src={bur4}
                      className="card-img img-fluid"
                      
                      alt=""
                    />
                  {/* </div> */}
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="" className="text-default mb-2" data-abc="true">
                      The All American
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    Lettuce, tomato,onions, lettuce pickles,cheese
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$13.00</h3>

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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={bur2}
                    className="card-img img-fluid"
                   
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      The Ferris Wheel
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    Stuffed with mozzarella and peooroni topped with marinara
                    sauce, provolone and mozzrella cheese
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={bur6}
                    className="card-img img-fluid"
                    
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      The Needham Melt
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    With swiss chees, sauted onions, truffle mushrooms
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={bur4}
                    className="card-img img-fluid"
                    
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      The Fighter
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    pepperjack, fried jalapeno, habanero jam, topped with a
                    crunchy slaw
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={bur2}
                    className="card-img img-fluid"
                   
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Trukey Burger
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    chedder cheese , lettuce, tomato, pickles and spicy mayo
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={bur6}
                    className="card-img img-fluid"
                    
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Masala Veggie Burger(Gf/V)
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    Homemade vaggie burger, lettuce, tomato, onions sweet
                    tamarind and
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$25.00</h3>
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={bur6}
                    className="card-img img-fluid"
                    
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      The Morining Burger
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    cooked agg, baocn amd avacado and cheese
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$17.00</h3>
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3'>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={bur6}
                    className="card-img img-fluid"
                    
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Bourbon Steak Tip Burger
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    steak tips, sauteed onions, cheese with a sweet/savory
                    bourbon sauce
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$18.00</h3>
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

export default Burger;
