import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './index.css'

const Api = () => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=24&order=DESC");
                const data = await response.json();
                const imgUrl = `https://cdn2.thecatapi.com/images/`;
                const fullImg = data.map(breed => ({
                    ...breed,
                    img: breed.reference_image_id ? `${imgUrl}${breed.reference_image_id}.jpg` : null
                }));
                setBreeds(fullImg);
            } catch (error) {
                console.error("Error", error);
            }
        };

        fetchData();

    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-10">Cat <span className="text-green-500"> Breeds</span></h1>
            <div className="w-full flex flex-wrap justify-center gap-5">
                {breeds.map(breed => (
                    <Link to={`/breed/${breed.id}`}>
                        <div key={breed.id} className="w-96 bg-white p-4">
                            <div className="mb-4">
                                <img src={breed.img} alt={breed.name} className="w-full h-64 object-cover object-top rounded-lg" />
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-left">{breed.name} <span className="bg-green-500 text-sm p-1">{breed.origin}</span></h2>
                            <h3 className="text-gray-600 text-md font-light mb-2 text-left">{breed.description}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Api;
