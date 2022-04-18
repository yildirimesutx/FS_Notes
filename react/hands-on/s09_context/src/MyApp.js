import React from 'react'

const MyApp = (props) => {
  return (
    <div>MyApp
        {props.children}
        {props.value}
    </div>
  )
}

export default MyApp