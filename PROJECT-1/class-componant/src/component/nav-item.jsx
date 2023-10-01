import React from 'react';
import { Link } from 'react-router-dom';

function NavItem ({ 
    content: text, Url, onClick }){
    return (
        <li className="nav-item">
            <Link className="nav-link active" onClick={onClick} to={Url} >{text}</Link>
        </li>
    )
}

export default NavItem;