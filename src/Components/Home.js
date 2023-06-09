import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Button from "react-bootstrap/Button";
import Burger from "../Pages/Burger";

import Sandwich from "../Pages/Sandwich";
import Sides from "../Pages/Sides";
import KidManu from "../Pages/KidManu";
import Salad from "../Pages/Salad";
import ColdDrink from "../Pages/ColdDrink";



const Home = () => {
 

  return (
    <div>
      
        <div className="container-fluid">
          <div className="row product">
            {/* <div className="col"> */}

            <Tabs selected={1}>
              <div className="row" style={{ marginTop: "4%" }}>
                <div className="list col-lg-2 col-md-2 col-sm-12 ">
                  <div className="tab_sticky tabs mt-2 mb-4">
                    <TabList className="">
                      <Tab>
                        <Button
                          className="tab-btn  "
                          style={{ padding: "10px" }}
                        >
                          Burger
                        </Button>
                      </Tab>
                      <Tab>
                        <Button
                          className="tab-btn "
                          style={{ padding: "10px" }}
                        >
                          Sandwich
                        </Button>
                      </Tab>
                      <Tab>
                        <Button
                          className="tab-btn "
                          style={{ padding: "10px" }}
                        >
                          Sides
                        </Button>
                      </Tab>
                      <Tab>
                        <Button
                          className="tab-btn "
                          style={{ padding: "10px" }}
                        >
                          Kid Manu
                        </Button>
                      </Tab>
                      <Tab>
                        <Button
                          className="tab-btn "
                          style={{ padding: "10px" }}
                        >
                          Salad
                        </Button>
                      </Tab>
                      <Tab>
                        <Button
                          className="tab-btn  "
                          style={{ padding: "10px" }}
                        >
                          Cold Drink
                        </Button>
                      </Tab>
                    </TabList>
                  </div>
                </div>

                <div class="col-lg-10 col-md-10 col-sm-12 ">
                  <TabPanel>
                    <Burger />
                  </TabPanel>
                  <TabPanel>
                    <Sandwich />
                  </TabPanel>
                  <TabPanel>
                    <Sides />
                  </TabPanel>
                  <TabPanel>
                    <KidManu />
                  </TabPanel>
                  <TabPanel>
                    <Salad />
                  </TabPanel>
                  <TabPanel>
                    <ColdDrink />
                  </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
          {/* </div> */}
        </div>
     
    </div>
  );
};

export default Home;
