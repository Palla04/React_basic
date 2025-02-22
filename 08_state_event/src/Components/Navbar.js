import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props){
    console.log("Title Prop:", props.title, "Type:", typeof props.title);
    console.log("About Prop:", props.about, "Type:", typeof props.about);
    return (
        <div>
            Hello I am a navbar
            <h1>{props.title}</h1>
            <h3>{props.about}</h3>
        </div>
    );
}
Navbar.defaultProps = {
    title: 'Guest',
    about: 18,
};

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.number,
};



