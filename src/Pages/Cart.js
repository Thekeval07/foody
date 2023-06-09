import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <>
        <link
          rel="stylesheet"
          type="text/css"
          href=""
        />
        <div className="container-fluid ">
          <div className="col-md-12 col-sm-12 mt-5 mb-5 content">
            <div className="row">
              <div className="col-md-12">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">Cart</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-info panel-shadow">
                  <div className="panel-heading">
                    <h3>
                      <img
                        className="img-circle img-thumbnail"
                        src="https://bootdey.com/img/Content/user_3.jpg"
                      />
                      Matew darfkmoun
                    </h3>
                  </div>
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                                className="img-cart"
                              />
                            </td>
                            <td>
                              <strong>Product 1</strong>
                              <p>Size : 26</p>
                            </td>
                            <td>
                              <form className="form-inline">
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue={1}
                                />
                                <button
                                  rel="tooltip"
                                  className="btn btn-default"
                                >
                                  <i className="fa fa-pencil" />
                                </button>
                                <a href="#" className="btn btn-primary">
                                  <i className="fa fa-trash-o" />
                                </a>
                              </form>
                            </td>
                            <td>$54.00</td>
                            <td>$54.00</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://www.bootdey.com/image/400x200/87CEFA/000000"
                                className="img-cart"
                              />
                            </td>
                            <td>
                              <strong>Product 2</strong>
                              <p>Size : M</p>
                            </td>
                            <td>
                              <form className="form-inline">
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue={2}
                                />
                                <button className="btn btn-default">
                                  <i className="fa fa-pencil" />
                                </button>
                                <a
                                  href="#"
                                  className="btn btn-primary"
                                  rel="tooltip"
                                >
                                  <i className="fa fa-trash-o" />
                                </a>
                              </form>
                            </td>
                            <td>$16.00</td>
                            <td>$32.00</td>
                          </tr>
                          <tr>
                            <td colSpan={6}>&nbsp;</td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-right">
                              Total Product
                            </td>
                            <td>$86.00</td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-right">
                              Total Shipping
                            </td>
                            <td>$2.00</td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-right">
                              <strong>Total</strong>
                            </td>
                            <td>$88.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-success">
                  <span className="glyphicon glyphicon-arrow-left" />
                  &nbsp;Continue Shopping
                </a>
                <a href="#" className="btn btn-primary pull-right">
                  Next
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Cart;
