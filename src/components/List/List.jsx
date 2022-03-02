import React from "react";

import './List.scss'

function List({ items }) {
    return (
        <ul className="list">
            {
                items.map(item => (
                    <li class={item.active ? 'active' : ''}>
                        <i>{item.icon}
                        {/* <i>{item.icon ? item.icon : <i className={item.color}><i/>}</i> NOT WORKING */}
                        {/* <i>{ item.icon ? item.icon : (<i className={`badge badge--${item.color}`}><i/>) }</i> NOT WORKING */}
                        </i><span>{item.name}</span>
                    </li>
                ))}
        </ul>
    );
}

export default List;
