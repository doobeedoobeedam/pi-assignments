import React from "react"
import { useParams, Link } from "react-router-dom"
import './index.css'

const Detail = ({ breeds }) => {
    const { id } = useParams();
    const breed = breeds.find(b => b.id === id);

    if (!breed) {
        return <div>Breed not found</div>;
    }

    const ProgressBar = ({ label, value }) => (
        <div className="mb-4">
            <p className="font-semibold">{label}</p>
            <div className="bg-gray-200 h-4 overflow-hidden">
                <div
                    className="bg-green-500 h-full"
                    style={{ width: `${(value / 5) * 100}%` }}
                ></div>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-4">
            <div className="mb-10 text-left">
                <Link to="/" className="text-green-500 text-lg">&larr; Back</Link>
            </div>
            <div className="w-full mb-8 grid grid-cols-1 sm:grid-cols-2 gap-5 grid-flow-row items-center">
                <img src={breed.img} alt={breed.name} className="w-full h-80 object-cover object-top rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold mb-4 text-left align-middle">{breed.name} <span className="bg-green-500 text-lg p-1">{breed.origin}</span></h1>
                    <p className="text-gray-600 text-xl text-left align-middle">{breed.description}</p>
                </div>
            </div>
            
            <div className="flex flex-wrap justify-between">
                <table className="table-auto w-full sm:w-1/2">
                    <tbody>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Adaptability</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.adaptability} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Affection Level</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.affection_level} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Child Friendly</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.child_friendly} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Dog Friendly</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.dog_friendly} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Energy Level</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.energy_level} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Grooming</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.grooming} /></td>
                        </tr>
                    </tbody>
                </table>

                <table className="table-auto w-full sm:w-1/2">
                    <tbody>

                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Health Issues</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.health_issues} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Intelligence</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.intelligence} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Shedding Level</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.shedding_level} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Social Needs</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.social_needs} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Stranger Friendly</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.stranger_friendly} /></td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left w-36 align-top">Vocalisation</td>
                            <td className="text-left pr-5"><ProgressBar value={breed.vocalisation} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Detail;
