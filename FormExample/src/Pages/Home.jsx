import React from 'react';
import '../styles/Home.css'; // Import external CSS
import img1 from '../images/room1.jpeg';
import img2 from '../images/room2.jpg';
import img3 from '../images/room3.jpg';
import img4 from '../images/room4.jpg';
import img5 from '../images/room5.jpg';
import img6 from '../images/room6.jpg';

const rooms = [
  { id: 1, image: img1, title: 'Deluxe Room', cost: '$120/night' },
  { id: 2, image: img2, title: 'Executive Room', cost: '$150/night' },
  { id: 3, image: img3, title: 'Standard Room', cost: '$100/night' },
  { id: 4, image: img4, title: 'Suite Room', cost: '$200/night' },
  { id: 5, image: img5, title: 'Luxury Room', cost: '$180/night' },
  { id: 6, image: img6, title: 'Economy Room', cost: '$80/night' },
];

function Home() {
  return (
    <div className="container">
      <h2 className="heading">Welcome to Our Hotel </h2>
      <p className="description">
        Explore our range of rooms suited for every budget and preference. Whether you're looking for luxury, comfort, or affordability, we've got the perfect space for you. Browse below to find the room that fits your needs.
      </p>
      <div className="room-grid">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.title} className="room-image" />
            <h3>{room.title}</h3>
            <p>{room.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
