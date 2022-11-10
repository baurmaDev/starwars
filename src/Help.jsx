import React from 'react'
import error from './assets/error.png'

function Help() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto'
    }}>
        <img src={error} alt='Not found page'/>
    </div>
  )
}

export default Help