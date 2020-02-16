import React from 'react'

function Project(props) {
    return (
        <div className = 'ProjectBox'>
            <img className = 'ProjectImg' src = {props.img} alt = 'An image corresponding to the project below' />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>

    )
}

export default Project