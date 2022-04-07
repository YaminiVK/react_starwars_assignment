import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = ({person}) => {
    // const peopleData = useSelector(state=>state.people);
    // const {id} = useParams();
    // const [selectedPerson, setSelectedPerson] = useState(peopleData[id]);
    // const [films,setFilms] = useState([]);

    // useEffect(async()=>{
    //     const fetchFilmsData = async() => {
    //       const films = person.films;
    //       setFilms(films);
    //     //   setSelectedPerson(peopleData[id]);
    //     }
    //     if(id){
    //       fetchFilmsData();
    //     }
    // },[id])

  return (
    <>
    <h1>Let's look at the information about {person.name}</h1>
    {person.films.length > 0 && (
        <ul>
            {person.films.map(film=> <li>{film}</li>)}
        </ul>
    )}
    </>
  )
}

export default Details