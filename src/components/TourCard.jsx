import React, {useState} from 'react';

const TourCard = ({id, name, info, price, image, onRemove}) => { //this is the TourCard component, it takes in props from the Gallery component
    const [readMore, setReadMore] = useState(false); //this is a state variable that will toggle the read more button

    return ( 
        <article className="tour-card">
            <h3>{name}</h3>
            <h3>{price}</h3>
            <img src={image} alt={name} />
            <p>{readMore ? info : `${info.substring(0, 80)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>

            <button className="btn-remove" onClick={() => {
                onRemove(id)
            }}>Not Interested</button>
        </article> //this is the actual tour card, it displays the name, price, image, and info of the tour. There is also a button to show the full description, instead of just the first 80 characters, and a button to remove the tour from the list.
    )
}

export default TourCard; //export the TourCard component so we can use it in other files