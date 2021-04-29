import React from 'react'

export default function Heading(props) {
      
    return (
        <div>
            {
                {
                    1: <h1>{props.title}</h1>,
                    2: <h2>{props.title}</h2>,
                    3: <h3>{props.title}</h3>,
                    4: <h4>{props.title}</h4>,
                    5: <h5>{props.title}</h5>,
                    6: <h6>{props.title}</h6>,
                }[props.h]
            }
        </div>
    )
}
