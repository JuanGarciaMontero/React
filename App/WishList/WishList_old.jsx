import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

const WishList = ({ wishes }) => (
    <ul className='wish-list'>
        {wishes.map(({ done, text }, i) => (
            <li 
                key={text} 
                className={classNames('wish-list__item',{
                 'wish-list__item--done' : done,
                })}
            >
                <input id={`wish${i}`} type="checkbox" checked={done} />
                <label htmlFor={`wish${i}`}>{text}</label>
            </li>
        ))}
    </ul>
);

WishList.propTypes = {
    wishes: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.bool,
            text: PropTypes.string,
        }),
    ),
};

WishList.defaultProps = {
    wishes: [],
};


export default WishList;