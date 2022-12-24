import React from "react";

import "./Product.css"

export default function Product() {

    const data = [
        {
            img: 'https://i.pinimg.com/originals/5c/7c/d6/5c7cd6368d22ac059c9aef589babc948.gif',
            title: 'Burger',
            price: '30.000ming'
        },
        {
            img: 'https://i.pinimg.com/originals/c2/3e/d4/c23ed4e6a1bbb79e626a943d356c3c82.gif',
            title: 'Hod-dog',
            price: '45.000ming'
        },
        {
            img: 'https://acegif.com/wp-content/uploads/gifs/pizza-38.gif',
            title: 'Pizzs',
            price: '60.000ming'
        },
        {
            img: 'https://i.pinimg.com/originals/65/ed/e5/65ede51b5fd0c065d954bfd8ca8eab80.gif',
            title: '3tasi 1tada',
            price: '80.000ming'
        },
        {
            img: 'https://cdn.dribbble.com/users/1429491/screenshots/3614394/2.gif',
            title: 'Sandwich',
            price: '80.000ming'
        },
        {
            img: 'https://thumbs.gfycat.com/BiodegradableCoarseAkitainu-size_restricted.gif',
            title: 'Milkshake',
            price: '15.000ming'
        },
        {
            img: 'https://i.gifer.com/eYQ.gif',
            title: 'Burrito',
            price: '30.000ming'
        },
        {
            img: 'https://media.tenor.com/jw2mIh5OgHMAAAAM/taco-tuesday-happy.gif',
            title: 'taco',
            price: '40.000ming'
        },
        {
            img: 'https://i.pinimg.com/originals/65/ed/e5/65ede51b5fd0c065d954bfd8ca8eab80.gif',
            title: '3tasi 1tada',
            price: '80.000ming'
        },
    ]

    return (
        <section className="product">
            <ul className="product__list">
                {
                    data.map((item) => {
                        return (
                            <li className="product__item">
                                <img className="product__img" src={item.img} alt="gif" width={50} height={50} />
                                <div className="product__title">{item.title}</div>
                                <div className="product__price">{item.price}</div>
                                <button className="product__btn">Sotib Olish</button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}