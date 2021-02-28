import React from 'react'

const book = (props) => {
    return (
        <a href={`bookdetail/${props.id}`}><li> { props.title } </li></a>
    )
}

export default book