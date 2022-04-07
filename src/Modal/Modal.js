import React from 'react';
import DisplayInfo from '../DisplayInfo';
import './Modal.css'

export const Modal = (props) => {
  return (
    <div className={`modal ${props.show? 'show' : ''}`}>
        <div className='modal-content'>
            <div className='modal-header'>
                <h4 className='modal-title'>Let's look at the information about {props.person.name}</h4>
                <button onClick={props.onClose}>Close</button>
            </div>
            <div className='modal-body'>
                <DisplayInfo person={props.person}/>
            </div>
            <div className='modal-footer'>
            </div>
        </div>
    </div>
  )
}
