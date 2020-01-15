import React from 'react';
import '../../commomstylecontent.css';
import {NavLink} from "react-router-dom";

const Name = (props) => {
    return(
        <div>
             <NavLink to ={"/test/" + props.id}>{props.name}</NavLink>

             
             
             </div>
        
    );
}

export default Name;