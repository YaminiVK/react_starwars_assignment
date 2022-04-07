import React, { useState } from 'react';
import './App.css';
import { Modal } from './Modal/Modal';

const People = ({peopleData}) => {
  const [personSelected, setPersonSelected] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleClickPerson = person => {
    setPersonSelected(person);
    setShowModal(true)
  }


  return (
    <div>
    <ul className='column'>
      {peopleData && peopleData.map((personClicked,index)=> {
        return <li key={index} onClick={()=>handleClickPerson(personClicked)}>
          <h3>{personClicked.name}</h3>
            </li>
      })}
    </ul>
    {
      personSelected && showModal &&  <Modal show={showModal} onClose={()=>setShowModal(false)} person={personSelected}/>
    }
    </div>
  )
}

export default People