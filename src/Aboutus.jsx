import React from "react";
import Navbarfnmi from "./Navbarfnmi";
function Aboutus()
{
    return(
       <React.Fragment>
            <Navbarfnmi/>
              <div className="container-fluid" style={{backgroundImage:"url('https://www.fernleaf.com.my/content/dam/fernleaf/my/en/about-us/Finalabout-us-background.png')",height:"600px",width:"100%"}}>
                   <div className="container" style={{width:"60%"}}>
                       <br/><br/><br/><br/>
                       <h1 className="text-success"><b>Our brand</b></h1>
                       <p>Fernleaf, a brand since 1893, offers a range of products that <br/>
                         are made with 100% milk from New Zealand. We bring the <br/>
                         goodness of dairy from our New Zealand farms to families <br/>
                          across Malaysia since 1982, providing nutritious milk that <br/>
                           contributes to a healthy, balanced diet. We draw from more <br/>
                            than a century of experience to deliver innovative products <br/>
                        that families love. Our core consumers are made up of <br/>
                        Malaysian families with kids while we also offer new <br/>
                        products to cater to the needs of young adults for their daily <br/>
                        nutrition. Other global brands in our family include <b> Anmum™ <br/>
                        Materna, Anmum™ Lacta, Anmum™ Essential, Anlene and <br/>
                        Anchor® </b>.</p>
                   </div>
              </div>

              <div className="container-fluid" style={{backgroundImage:"url('https://www.fernleaf.com.my/content/dam/fernleaf/my/en/about-us/about-us-background-images-desktop-bottom.png')",height:"400px",width:"100%",backgroundSize:"cover"}}>
                   <div className="container" style={{width:"60%"}}>
                       <br/><br/><br/><br/>
                       <h1 className="text-success"><b>Our Mission</b></h1>
                       <p>Our mission is to provide important nutrients to support your <br/>
                        daily needs. <br/>
                        Find out how we bring dairy goodness to Malaysia families <br/>
                        every day.<br/> </p>
                   </div>
              </div>
       </React.Fragment>

       
);
}
export default Aboutus;