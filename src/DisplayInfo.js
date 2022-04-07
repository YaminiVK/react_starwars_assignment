import React from 'react';
import './App.css'

const DisplayInfo = ({person}) => {
delete person.url;
  return (
    <div>
      {
        Object.keys(person).map((key, i) => ( 
          <div className='row'>
            { person[key] && <><div>{key.charAt(0).toLocaleUpperCase() + key.substring(1)}:</div>
            <i style={{paddingLeft:'10px'}}>{Array.isArray(person[key]) ? person[key].join(', ') : person[key]}</i></>}
          </div>
        ))
      }
    </div>
  )
}

export default DisplayInfo