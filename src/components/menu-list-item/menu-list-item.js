import React from 'react';
import {Link} from 'react-router-dom';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category, id} = menuItem;
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
            <Link to={`/${id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category} <i className={`fas fa-${icon}`}></i></span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn" onClick={() => onAddToCart()}>Add to cart</button>
            </Link>
        </li>
    )
}

export default MenuListItem;