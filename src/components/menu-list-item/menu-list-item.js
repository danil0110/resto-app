import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;
    const icon = (() => {
        switch (category) {
            case 'pizza':
                return 'pizza-slice';
            case 'meat':
                return 'drumstick-bite';
            case 'salads':
                return 'seedling';
            default:
                return 'utensils';
        }
    })();

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category} <i className={`fas fa-${icon}`}></i></span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;