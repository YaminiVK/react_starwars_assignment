import React from 'react';
import './App.css'

const DisplayInfo = ({person}) => {
  return (
    <div>
      {
        Object.keys(person).map((key, i) => ( 
          <div className='row'>
            { person[key] && <><div style={{textTransform:'capitalize'}}>{key}:</div>
            <i style={{paddingLeft:'10px'}}>{Array.isArray(person[key]) ? person[key].join(', ') : person[key]}</i></>}
          </div>
        ))
      }
    </div>
  )
}

export default DisplayInfo