


import '../Secondsection.css';
import React from 'react';

function Secondsection () {
    return (
        <div className="section2">

            <div className="container">
                <p className="greentitle">INCLUDED IN ALL PLANS</p>
                <h1 className="bigwhitetitle">All The TV You Love</h1>
                <h3 className="whitetitle">Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</h3>
            </div>



            <div className="collage-container">
            <div className="image-container">
                <div className="postercontainer1">
                    
                    <p>Past & Current Seasons</p>
                    <h2>TV Shows</h2>
                    
                </div>

                <div className="postercontainer2">
                    
                    <p>New & Classic</p>
                    <h2>Movies</h2>
                    
                </div>

                <div className="postercontainer3">
                    
                    <p>Groundbreaking</p>
                    <h2>Hulu Originals</h2>
                    
                </div>

                <div className="postercontainer4">
                    
                    <p>Add-on</p>
                    <h2>Premiums</h2>
                    
                </div>
            </div>
            </div>


            

        </div>
    )
}

export default Secondsection;