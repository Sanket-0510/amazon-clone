import React from "react";
import './home.css';
import Product1 from "./Product1";
import Basket from "./Basket";

function Home() {
  return (<div className="Home-elements">
    <div className="home-page">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
    </div>
    <div className="row1">
      <Product1 id="3879834"
        title="Rich Dad Poor Dad BOOk to guide you 
               throughout your financial journey"
        image="https://kbimages1-a.akamaihd.net/55873ad1-8ed8-4468-951d-8337872b0f32/1200/1200/False/rich-dad-poor-dad-16.jpg" price={29.99}
        rating={2} />
      <Product1 id="34373" title="this is product 2" image="https://kbimages1-a.akamaihd.net/55873ad1-8ed8-4468-951d-8337872b0f32/1200/1200/False/rich-dad-poor-dad-16.jpg" price={12} rating={4} />

    </div>
    <div className="row2">
      <Product1 id="3435464" title="this is product 3" image="https://kbimages1-a.akamaihd.net/55873ad1-8ed8-4468-951d-8337872b0f32/1200/1200/False/rich-dad-poor-dad-16.jpg" price={12} rating={4} />
      <Product1 id="345432" title="this is product 4" image="https://kbimages1-a.akamaihd.net/55873ad1-8ed8-4468-951d-8337872b0f32/1200/1200/False/rich-dad-poor-dad-16.jpg" price={12} rating={4} />
      <Product1 id="34545" title="this is product 5" image="https://kbimages1-a.akamaihd.net/55873ad1-8ed8-4468-951d-8337872b0f32/1200/1200/False/rich-dad-poor-dad-16.jpg" price={12} rating={4} />

    </div>
    <div className="row3">
      <Product1 id="232434" title="this is product 6" image="https://kbimages1-a.akamaihd.net/55873ad1-8ed8-4468-951d-8337872b0f32/1200/1200/False/rich-dad-poor-dad-16.jpg" price={12} rating={4} />
    </div>
     
  </div>);
}

export default Home;
