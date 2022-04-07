export const BASE_URL = 'https://swapi.dev/api/';

export const fetchPeople = async(url) => {
    const response = await fetch(`${BASE_URL}${url}/`);
    const people = await response.json();
    const {results} = people;
    return results;
}

export const fetchFilms = async(url) => {
    const response = await fetch(url);
    const film = await response.json();
    const {title} = film;
    return title;
}

export const fetchDetails = async(url) => {
    const response = await fetch(url);
    const details = await response.json();
    const {name} = details;
    return name;
}

export const fetchData = async(url) => {
    const results = await fetchPeople(url);
    results.map(async(person) => {
        const films = await Promise.all(person.films.map(film=> fetchFilms(film)));
        person.films = [...films];
        const species = await Promise.all(person.species.map(species=> fetchDetails(species)));
        person.species = [...species];
        const starShips = await Promise.all(person.starships.map(starship=> fetchDetails(starship)));
        person.starships = [...starShips];
        const homeWorld = await fetchDetails(person.homeworld);
        person.homeworld = homeWorld;
        const vehiclesList = await Promise.all(person.vehicles.map(vehicle=> fetchDetails(vehicle)));
        person.vehicles = [...vehiclesList]
        // TO DO transform results
    })
    return results;
}