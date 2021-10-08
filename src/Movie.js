import React from 'react'

export default function Movie({name,price,id}) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h3>{id}</h3>
        </div>
    )
}
