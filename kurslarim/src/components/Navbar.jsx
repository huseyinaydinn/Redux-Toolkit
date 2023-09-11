import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from 'react-redux'

function Navbar() {

    const { quantity } = useSelector((store) => store.card)
    return (
        <nav>
            <div className="navbar">
                <a href="">
                    <h3>Kurs Uygulaması</h3>
                </a>
                <a href="#" className="basket-link">
                    <div className="basket-container">
                        <p id="basket-amount">{quantity}</p>
                        <BsFillBasketFill />
                    </div>
                </a>

            </div>
        </nav>
    );
}

export default Navbar;
