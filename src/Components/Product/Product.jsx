import React from "react";

import "./Product.css"

export default function Product() {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <section className="product">
            <ul className="product__list">
                {
                    data.map((item) => {
                        return (
                            <li className="product__item">
                                <img className="product__img" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/b7bcdb32152391.57a57ef801018.gif" alt="gif" width={200} height={200} />
                                <div className="product__title">Mator</div>
                                <div className="product__price">10.000 ming</div>
                                <button className="product__btn">Sotib Olish</button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}