import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from "react-redux"
import { removeItem, increase, decrease, calculateTotal } from '../control/cardSlice'

function CourseItem({ id, title, price, img, quantity }) {
    const dispatch = useDispatch();
    return (
        <div className="card-item">
            <div className="img-details">
                <img src={img} alt="" />
                <div className="item-name">

                    <span className="title">
                        {title}
                    </span>
                    <div className="id">
                        {id}
                    </div>
                </div>
            </div>
            <div className="quantity">
                <button onClick={() => {
                    if (quantity <= 1) {
                        dispatch(removeItem(id))
                        dispatch(calculateTotal())
                    } else {
                        dispatch(decrease(id))
                    }
                }}>
                    <AiOutlineMinus />
                </button>
                <span className="quantity-number">{quantity}</span>
                <button onClick={() => { dispatch(increase(id)) }}>
                    <AiOutlinePlus />
                </button>
            </div>

            <div className="price">
                {price} TL
            </div>

            <div className="delete-item">
                <button className="delete-btn" onClick={() => {
                    dispatch(removeItem(id));
                    dispatch(calculateTotal());
                }}>Sil</button>
            </div>
        </div>
    )
}

export default CourseItem