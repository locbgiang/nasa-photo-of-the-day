import React from "react";
import "./PageBody.css";

const PageBody = props =>{
    return(
        <div>
        <section>
            {props.title};
            {props.author};
            {props.date};
        </section>
        <img src = {props.image} />
        <section>{props.article};</section>
        </div>
    )
}

export default PageBody;