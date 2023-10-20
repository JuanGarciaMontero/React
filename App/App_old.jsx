import React from 'react';
import './App.css';
import classNames from 'classnames';

const wishes = [
    { text: 'Travel to the moon', done: false },
    { text: 'Make an intro course to React', done: true },
    { text: 'Pay the gym', done: true},
    { text: 'Go to the gym', done: false},
];

const App = () => (
    <div className='app'>
        <h1>My wishlist</h1>
        <fieldset className='wish-input'>
            <legens className='wish-input__label'>New wish</legens><br />
            <input className='wish-input_field' placeholder="Enter your wish here" /><br /><br />
        </fieldset>
        <ul className='wish-list'>
            {wishes.map(({ text, done }, i) => (
                <li key={text} className={ `wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
                    <label htmlFor={`wish${i}`}>
                        <input id={`wish${i}`} type="checkbox" checked={done} />
                        {text}
                    </label>
                </li>
            ))}
        </ul>
        <button className='wish-clear' type="button">Archive done</button>
    </div>
);

export default App;