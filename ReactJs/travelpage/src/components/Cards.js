import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import img1 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img8 from '../images/img-8.jpg'

const Cards = () => {
    return (
        <div className = 'cards'>
            <h1>Check out these EPIC Destination</h1>
            <div className = 'cards_container'>
                <div className = 'cards_wrapper'>
                    <ul className = 'cards-items'>
                        <CardItem 
                            src = {img1}
                            text = 'Explore the hidden waterfall deep inside the Amazon Jungle'
                            label = 'Adventure'
                            path = '/Service'
                        />
                        <CardItem 
                            src = {img2}
                            text = 'Travel through the Islands of Bali in a Private Cruise'
                            label = 'Luxury'
                            path = '/Service'
                        />
                    </ul>
                    <ul className = 'cards-items'>
                        <CardItem 
                            src = {img3}
                            text = 'Set Sail in the Atlantic Ocean visiting Uncharted Water'
                            label = 'Mystery'
                            path = '/Service'
                        />
                        <CardItem 
                            src = {img4}
                            text = 'Experience Football on Top of the Himilayan Moutains'
                            label = 'Adventure'
                            path = '/Service'
                        />
                        <CardItem 
                            src = {img8}
                            text = 'Ride through the Sahara Desert on a guided camel tour'
                            label = 'Andrena Line'
                            path = '/Service'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards