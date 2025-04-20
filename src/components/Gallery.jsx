import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';
import '../styles/Gallery.css'; //import our css, react, adn the individual tour card component

const Gallery = ({ tours, setTours, onRemove }) => { 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false); //im gonna keep it a hunnit. I don't know what this does, we haven't talked about it in class yet.

    const fetchTours = async () => { //create an async function to fetch the data from the API
        try {
            const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'); //fetch the data from the API
            const data = await response.json(); //json-ify the data
            const trimmed = data.map((tour) => ({ //map through the data and trim it down to what we need
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image
            })); //map through the data and trim it down to what we need
            setTours(trimmed); //set the tours to the trimmed data
            setIsLoading(false); //set isLoading to false when the data is fetched
        } catch (error) { //if there is an error, set isLoading to false and set error to true
            setError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => { //useEffect is a hook that runs after the component mounts
        fetchTours(); //call the fetchTours async function when the component mounts
    }, []); //useEffect will run once when the component mounts, and the empty array means it won't run again

    if (isLoading) { //if isLoading is true, return a loading message
        return <h2>Loading...</h2>;
    }

    if (error) { //if there is an error, return an error message
        return <h2>Error fetching tours</h2>;
    }

    if (tours.length === 0) { //if there are no tours, return a message saying there are no tours
        return (
            <div>
                <h2>No Tours Left</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div> //this button will refresh the page and fetch the tours again
        );
    }

    return ( //if there are tours, return the gallery of tours
        <section className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} onRemove={onRemove} />
            ))}
        </section> //this is where we map through the tours and return the TourCard component for each tour
    );
};

export default Gallery; //export the gallery component so we can use it in other files