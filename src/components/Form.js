import { useState } from 'react';

const Form = () => {
    const [band, setBand] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGen] = useState('');
    const [nameErr, setNameErr] = useState('Name must be more than 2 chars');
    const [yearErr, setYearErr] = useState('A year must be 4 chars');
    const [genreErr, setGenErr] = useState('Please pick up genre');
    const handleYearChange = (e) => {
        if (e.target.value.length !== 4) {
            setYearErr('A year must be 4 chars')
        } else {
            setYearErr('');
        }
        setYear(e.target.value);
    }
    const handleSubmit = (e) => {
        // checks and sending or not to server
        e.preventDefault();
        console.log('Submitted...');
        setBand('');
        setYear('');
        setGen('');
    }
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form</h1>
            <p>{ band }</p>
            <p>{ year }</p>
            <div>
                <label htmlFor='band'>Name</label>
                <input type='text' id='bandName' onChange={(e) => setBand(e.target.value)} value={band} />
            </div>
            { band.length < 3 ? <p>{ nameErr }</p> : null}
            {/* <p>{ nameErr }</p> */}
            <div>
                <label htmlFor='year'>Year</label>
                <input type='text' id='yearForm' onChange={(e) => handleYearChange(e)} value={year} />
            </div>
            <p>{ yearErr }</p>
            <div>
                <label htmlFor='genre'>Genre</label>
                <select name='' id='genre' onChange={(e) => setGen(e.target.value)} value={genre} >
                    <option value='rock'>Rock</option>
                    <option value='jazz'>Jazz</option>
                    <option value='country'>Country</option>
                </select>
            </div>
            { genre ? null : <p>{ genreErr }</p>}
            <button>Submit</button>
        </form>
    )
}
export default Form;

const exName = 'Mathew';
console.log(exName.length);
if (exName.length < 3) {
    console.log('less');
} else {
    console.log('greater');
}