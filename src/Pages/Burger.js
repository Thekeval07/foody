import React from "react";

import bur2 from "../image/burger2.jpg";
import bur4 from "../image/burger_4.jpg";
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
              <Link to='https://www.toasttab.com/homekitchen/v3/add/9bdce791-b88f-4d48-b565-304002bb5464/291fb3eb-b58f-4f4c-9231-0b4206b91030'>
             
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
                    <a href="#" className="text-default mb-2" data-abc="true">
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
                <Link to='https://www.toasttab.com/homekitchen/v3/add/9bdce791-b88f-4d48-b565-304002bb5464/291fb3eb-b58f-4f4c-9231-0b4206b91030' type="button" className="btn btn-outline-dark" >
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='toasttab.com/homekitchen/v3/add/20492959-1af8-4eb3-8fae-cff543892a28/291fb3eb-b58f-4f4c-9231-0b4206b91030'>
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
                <Link to='toasttab.com/homekitchen/v3/add/20492959-1af8-4eb3-8fae-cff543892a28/291fb3eb-b58f-4f4c-9231-0b4206b91030' type="button" className="btn btn-outline-dark" >
                  
                    
                  
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/4f6b9379-d094-492c-aa80-5b0d5dedc8cd/291fb3eb-b58f-4f4c-9231-0b4206b91030'>
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

                  <Link to='https://www.toasttab.com/homekitchen/v3/add/4f6b9379-d094-492c-aa80-5b0d5dedc8cd/291fb3eb-b58f-4f4c-9231-0b4206b91030' type="button" className="btn btn-outline-dark" >
                  
                    
                  
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/c202a5ee-16e4-47c1-810a-58848853e97f/291fb3eb-b58f-4f4c-9231-0b4206b91030'>
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

                <Link to='https://www.toasttab.com/homekitchen/v3/add/c202a5ee-16e4-47c1-810a-58848853e97f/291fb3eb-b58f-4f4c-9231-0b4206b91030' type="button" className="btn btn-outline-dark" >
                  
                    
                  
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/7ac4e0a5-da6b-4e1e-89a4-e3d761917b77/291fb3eb-b58f-4f4c-9231-0b4206b91030'>
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

                <Link to='https://www.toasttab.com/homekitchen/v3/add/7ac4e0a5-da6b-4e1e-89a4-e3d761917b77/291fb3eb-b58f-4f4c-9231-0b4206b91030 ' type="button" className="btn btn-outline-dark" >
                  
                    
                  
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/57613bdf-440e-4bc0-b9b7-71a241fb93c6/291fb3eb-b58f-4f4c-9231-0b4206b91030'>
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

                <Link to='https://www.toasttab.com/homekitchen/v3/add/57613bdf-440e-4bc0-b9b7-71a241fb93c6/291fb3eb-b58f-4f4c-9231-0b4206b91030' type="button" className="btn btn-outline-dark" >
                  
                    
                  
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/73d69511-d920-42af-9615-b44b3673c3b2/291fb3eb-b58f-4f4c-9231-0b4206b91030'>
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

                <Link to='https://www.toasttab.com/homekitchen/v3/add/73d69511-d920-42af-9615-b44b3673c3b2/291fb3eb-b58f-4f4c-9231-0b4206b91030' type="button" className="btn btn-outline-dark" >
                  
                    
                  
                  View Product 
                </Link>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
            <Link to='https://www.toasttab.com/homekitchen/v3/add/c65c6cc9-1b50-4964-93f2-a53971a3d6e0/291fb3eb-b58f-4f4c-9231-0b4206b91030'>
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
                <Link to='https://www.toasttab.com/homekitchen/v3/add/c65c6cc9-1b50-4964-93f2-a53971a3d6e0/291fb3eb-b58f-4f4c-9231-0b4206b91030' type="button" className="btn btn-outline-dark" >
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
