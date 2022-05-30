import axios from 'axios';
import { useEffect, useState } from 'react';

const Pokemon = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then((response) => {
                const list = response.data.results;
                const shuffledList = list.sort((a, b) => 0.5 - Math.random());
                setData(shuffledList);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, []);
    return (
        <div>
            <div>
                {data.map((element, index) => {
                    return (
                    <div key={index}>
                        <p>name: {element.name[0].toUpperCase() + element.name.slice(1)}</p>
                        <p>{element.url.split('v2/')[1]}</p>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default Pokemon;