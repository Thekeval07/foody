import React from "react";
import data from '../Data.json'

const Sandwich = () => {
  return (
    <div>
       <div className="container d-flex justify-content-center  mb-50"> 
        <div className="row card-row">
        <h1 className="product-name">SANDWICH</h1>
        {data.Sandwich.map((item) => {
            return (
              <div className="col-md-4 col-sm-6" key={item.id}>
                <div className="card">
                  <a href={item.link}>
                    <div className="card-body">
                      <div className="card-img-actions">
                        <img
                          src={item.src}
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
                          <a
                            href=""
                            className="text-default mb-2"
                            data-abc="true"
                          >
                            {item.product_name}
                          </a>
                        </h6>
                        <a href="" className="text-muted" data-abc="true"></a>
                      </div>
                      <h3 className="mb-0 font-weight-semibold">
                        {item.price}
                      </h3>
                      <div>
                        <i className="fa fa-star star" />
                        <i className="fa fa-star star" />
                        <i className="fa fa-star star" />
                        <i className="fa fa-star star" />
                      </div>
                      <a
                        href={item.link}
                        type="button"
                        className="btn btn-outline-dark"
                      >
                        View Product
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
          
        </div>
      </div> 
   </div>
  );
};

export default Sandwich;
