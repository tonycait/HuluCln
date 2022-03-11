//create react component


import '../Firstsection.css';
import React from 'react';
import hulu from '../images/logos.png';

function Firstsection () {
    return (

        <div className="section1">
            <section className="header-background">
                <nav>
                    <h3>LOG IN</h3>
                </nav>

                <div className="container">
                    <p className="title">
                    BUNDLE WITH ANY HULU PLAN & SAVE
                    </p>

                    <img src={hulu} alt="" srcset="" />

                    <h2>
                    Get endless entertainment, live sports, and the shows and 
                    movies you love.
                    </h2>

                    <button className="btn">
                        GET THE DISNEY BUNDLE
                    </button>
                </div>
            </section>

            
        </div>
        

    

        
    );
}

export default Firstsection;

