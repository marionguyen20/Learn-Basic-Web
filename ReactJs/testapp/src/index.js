import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo () {
    return (
        <div>
            <h1>My name is Mario</h1>
            <p>This is my paragraph about me..</p>
            <ul>
                <li>Japan</li>
                <li>America</li>
                <li>Korea</li>
            </ul>
        </div>
    )
}
ReactDOM.render(
    <MyInfo />    
    , document.getElementById('root')
);


