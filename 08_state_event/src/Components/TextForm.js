import React,{useState} from "react";

export default function TextForm(props){
    return (
        <div className="p-4">
            <h1 className="text-primary">{props.heading}</h1>
            <div className="mb-3">
                 <textarea className="form-control border border-dark" id="myBox" rows="2"></textarea>
            </div>
            <button className="btn btn-primary mt-2">Convert to Uppercase</button>
        </div>
    );
}
