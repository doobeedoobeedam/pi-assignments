import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Api from './Api'
import Detail from './Detail'
import './index.css'

const App = () => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.thecatapi.com/v1/breeds");
                const data = await response.json();
                const imgUrl = `https://cdn2.thecatapi.com/images/`;
                const fullData = data.map(breed => ({
                    ...breed,
                    img: breed.reference_image_id ? `${imgUrl}${breed.reference_image_id}.jpg` : null
                }));
                setBreeds(fullData);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Api breeds={breeds} />} />
                    <Route path="/breed/:id" element={<Detail breeds={breeds} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
