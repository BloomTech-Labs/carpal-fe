import React from 'react';
import Slider from "../../img/CarPal.mp4";
import Imgone from "../../img/Group 38 (1).png";
import Imgtwo from "../../img/Group 29.png";
import Imgthree from "../../img/Group 39.jpg";
import dashboard from "../../App"

import "./Landing-Page.scss";

function LandingPage() {
    return (
        <div>            
            <div className="hero">
                <video className="slider" autoPlay loop muted>
                    <source src={Slider} type="video/mp4" />
                </video>
                
                <a className="overlaybutton" href={dashboard}>Sign Up</a>
            </div>
            <div className="main">
                <section className="container">
                <div id="first">
                    <h2>Features</h2>
                    <div class="features">            
                        <div class="paraone">            
                            <p class="firstpara">
                            Welcome to Carpal the future of networking and commuting at the same time. 
                            Yeah, we did it seriously. Watch this with Carpal you will be able to join a 
                            community of drivers and riders who are looking to save money, lessen the impact 
                            on the enviorment, and gain a friend along the way. With this awesome app, these 
                            are just a few of the features you will get such as SMS messaging, friends list, 
                            gamification (user stats and point system) and even driver's real-time location, 
                            but wait there's more and its just five clicks away front becoming a Carpaller. 
                            </p>
                        </div>
                        <div class="imgone">
                            <img className="allimg" src={Imgone} alt="Temp img" /> 
                        </div>            
                    </div>
                </div>
                

                <div id="second">
                    <h2>Drivers</h2>
                    <div class="featuresflip">
                        <div class="paraone">            
                            <p class="firstpara">
                            Are you a current driver who loves to drive or even hates to drive,
                            well guess what you in luck. The Carpal developer kept you in mind 
                            when building this app I might even add that they made it just for you.    
                            </p>
                        </div>            
                        <div class="imgone">
                            <img className="allimg" src={Imgtwo} alt="Temp img" /> 
                        </div>    
                    </div>
                </div>

                <div id="third">
                    <h2>Riders</h2>
                    <div class="features">
                        <div class="paraone">            
                            <p class="firstpara">
                            As a rider, you gain many great features that are completely free believe me 
                            I made sure of that.  If you don't mind here are just a few of them request 
                            a ride to your destination, customize the type of driver you are interested in 
                            meet, and rate each Carpal experience to make sure our community stays the best 
                            in the business. It's almost like your the boss but please don't fire me.
                            </p>
                        </div>
                        <div class="imgone">
                            <img className="allimg" src={Imgthree} alt="Temp img" /> 
                        </div>     
                    </div>
                    
                </div>  
            </section>
            </div>
            
            <section class="containertwo">
            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <h4 className="padding">Ready to gooooooooo?</h4>
            <button name="signup">sign Up</button>
            </section>
        </div>
         
        
    )
}

export default LandingPage