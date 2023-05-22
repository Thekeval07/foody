import React from "react";
import logo from '../image/logo.png'

const Footer = () => {
  return (
    <div>
<div className="container-fluid footer-color" >
                <div className='container'>
                    <footer className="row pt-5 border-top">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <a
                                href="#"
                                className="d-flex align-items-center  link-dark "
                            >
                                <img className="footer-logo" alt="" src={logo}></img>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h5 className='text-white'>Opening Time</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <p className="text-white  text">Monday closed</p>
                                    <p  className="text-white  text">Tuesday-saturday: 11:30AM to 8PM</p>
                                    <p  className="text-white  text">Sunday 10:30AM to 3PM</p>
                                </li>
                            </ul>
                            <h5 className='text-white'>Address</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <p  className="text-white  text">324 Chestnut Street,</p>
                                    <p  className="text-white  text">Needham MA 02492</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h5 className='text-white'>The Menu</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <p  className="text-white  text"> Take out</p>
                                    <p  className="text-white  text"> Tiffin(Mealplan) </p>
                                    <p  className="text-white  text"> Desserts</p>
                                    <p  className="text-white  text"> Homemade Products</p>
                                    <p  className="text-white  text"> Catering</p>
                                    <p  className="text-white  text"> Our Spacials</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h5 className='text-white'>E-mail</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="mailto: homekitcheninc@gmail.com" className="text-white text">
                                        homekitcheninc@gmail.com
                                    </a>
                                </li>
                            </ul>
                            <h5 className='text-white'>Phone-No</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <p><a href="tel: 781-347-2233"> 781-347-2233</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 pt-4' >
                            <div
                            className="text-center pt-4 pb-3"
                            
                        >
                            <span className='text-white'> © 2019 Home Kitchen - Created by :</span>
                            <a className="text-light " href="https://www.metizsoft.com/">
                                Metizsoftsolution.com
                            </a>
                        </div>
                        </div>
                    </footer>
                </div>




      {/* <div className="container-fluid" style={{ color:"#282828" }}>
        <div className="container">


                <footer className="row pt-5 border-top" >
                      <div className="col"></div>
                    <div className="col">
                        <a
                            href="/"
                            className="d-flex align-items-center my-3 mb-3 link-dark text-decoration-none"
                        >
                            
                        </a>
                        <img className="footer-logo" src={logo}></img>
                        
                    </div>
                    <div className="open-time col ">
                                <h5 className="text-white">Opening Time</h5>
                        
                               <p className="text-white  text">Monday Closed</p>
                               <p className="text-white text">Tueday-Saturday:11:30AM to 8Pm</p>
                               <p className="text-white text">Sunday:10:30AM to 3:00PM</p>
                               <h5 className="text-white"> Address</h5>
                                <p className="text-white text">324 Chestnut Street,</p>
                                <p className="text-white text">Needham MA 02492</p>                       
                    </div>
                    <div className="col">
                        <h5 className="text-white">The Menu</h5>
                        <p className="text-white  text">Take Out</p>
                        <p className="text-white  text">Tiffin(Mealplan)</p>
                        <p className="text-white  text">Dessrts</p>
                        <p className="text-white  text">Homemade Porducts</p>
                        <p className="text-white  text">Catering</p>
                        <p className="text-white  text">Out Specials</p>
                        
                    </div>
                    <div className="col">
                        <ul className="nav flex-column">
                    <h5 className='text-white'>E-mail</h5>
                            <li className="nav-item mb-2">
                                <p><a className="text-white text" href="mailto: homekitcheninc@gmail.com" >
                                homekitcheninc@gmail.com
                                </a></p>
                            </li>
                        </ul>
                        <h5 className='text-white'>Phone-No</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                            <p><a className="text-white text" href="tel: 781-347-2233"> 781-347-2233</a></p>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="col"></div>
                <div className='col-12'>
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0,1)" }}
                    >
                        © 2020 Copyright:...
                        <a className="text-light" href="https://www.metizsoft.com/">
                            Metizsoftsolution.com
                        </a>
                    </div>
                </div>
                </footer>
        </div>
            </div> */}
            </div>
            </div>

  );
};

export default Footer;
