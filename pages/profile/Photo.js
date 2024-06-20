import React from 'react'

const Photo = (props) => {
  return (
    <div>
        <section>
            <img src={props.url} alt="doggo photo"/>
        </section>
    </div>
  )
}

export default Photo