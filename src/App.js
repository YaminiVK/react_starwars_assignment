import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchData } from './fetchAPI';
import People from './People';

const App = () => {
  const dispatch = useDispatch();
  const peopleData = useSelector(state => state.people);
  const completeListOfCharacters = peopleData;
  const [starWarsCharacters, setStarWarsCharacters] = useState(peopleData);
  const [searchParam, setSearchParam] = useState('');

  useEffect(()=>{
    const fetchPeopleData = async() => {
      const people = await fetchData('people');
      setStarWarsCharacters(people);
      dispatch({type:'FETCH_PEOPLE', people: people}); 
    }
    fetchPeopleData()
  },[])

  const handleSearch = e => {
    const searchText = e.target.value;
      setSearchParam(searchText);
      if(searchText){
        const filteredPeopleList = starWarsCharacters.filter((character)=> character.name.toLowerCase().includes(searchText.toLowerCase()));
        setStarWarsCharacters(filteredPeopleList)
      }else{
        setStarWarsCharacters(completeListOfCharacters)
      }
  }

  
  return (
    <div className='App'>
      <div className='header'>
        <h1> Star Wars Assignment </h1>
      </div>
      {peopleData && peopleData.length > 0 ? 
        <>
          <input 
            type='text' 
            onChange={(e)=>handleSearch(e)} 
            value={searchParam} 
            placeholder="Filter your list"
            data-testid='filter-input'
          />

        { starWarsCharacters && starWarsCharacters.length > 0 ? 
          <> <People peopleData={starWarsCharacters}/> </>
      : <h1>Match Not Found!!!</h1>}
        </>
      : <h1>Let's wait for the Star wars universe to load</h1>}
    </div>
  )
}

export default App
