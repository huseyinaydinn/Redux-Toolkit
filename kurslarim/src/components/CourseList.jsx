import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import CourseItem from "./CourseItem"
import { clearCard } from "../control/cardSlice"

function CourseList() {

    const dispatch = useDispatch();
    const { cardItems, quantity, total } = useSelector((store) => store.card)

    return (
        <div className="course-list">
            {
                quantity < 1 ? (
                    <section>
                        <header>
                            <h2>Sepetim</h2>
                            <h4 className="empty-basket">Sepetinizde ürün bulunmuyor.</h4>
                        </header>
                    </section>
                ) : (
                    <section>
                        <header>
                            <h2>Sepetim</h2>
                        </header>
                        <div className="card">
                            {cardItems.map((item) => {
                                return (
                                    <span key={item.id}>
                                        <div className="hr" >
                                            <hr />
                                        </div>
                                        <CourseItem {...item} />
                                    </span>

                                )
                            })}
                        </div>
                        <footer className="footer-details">
                            <hr />
                            <div className="footer-price">
                                <h4>Toplam Tutar <span className="total-price">{cardItems.length > 0 ? total : 0} TL</span></h4>
                                <div className="btn-container">
                                    <button className="total-price-btn" onClick={() => dispatch(clearCard())}>Sepeti Temizle</button>
                                    <button className="pay-btn" onClick={() => console.log(total)}>Ödeme Yap</button>
                                </div>

                            </div>

                        </footer>
                    </section>
                )
            }
        </div>
    )
}

export default CourseList