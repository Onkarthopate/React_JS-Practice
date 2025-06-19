import room1 from '../images/room1.jpeg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpg';
import room4 from '../images/room4.jpg';
import room5 from '../images/room5.jpg';
import room6 from '../images/room6.jpg';
import React, { useState, useEffect } from 'react';
import './Example.css'

const data = [
  {
    id: 1,
    name: "Sunset Paradise Hotel",
    price_per_room: 120,
    rating: 4.5,
    image: room1
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    price_per_room: 85,
    rating: 4.2,
    image: room2
  },
  {
    id: 3,
    name: "Cityscape Inn",
    price_per_room: 150,
    rating: 4.8,
    image: room3
  },
  {
    id: 4,
    name: "Coastal Retreat",
    price_per_room: 99,
    rating: 4.0,
    image: room4
  },
  {
    id: 5,
    name: "Forest Haven Hotel",
    price_per_room: 110,
    rating: 4.3,
    image: room5
  },
  {
    id: 6,
    name: "Cityscape Inn",
    price_per_room: 150,
    rating: 4.8,
    image: room6
  }
];

function SkeletonCard() {
  return (
    <ul className="skeleton-card">
      <li><div className="skeleton skeleton-img" /></li>
      <li><div className="skeleton skeleton-text short" /></li>
      <li><div className="skeleton skeleton-text" /></li>
      <li><div className="skeleton skeleton-text" /></li>
    </ul>
  );
}

function ExampleLoaderSkeleton() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h2>Book Your Room ...</h2>
      {
        isLoading
          ? Array.from({ length: 6}).map((_, index) => <SkeletonCard key={index} />)
          : data.map((item) => (
              <ul key={item.id} className="room-card">
                <li><img src={item.image} alt={item.name} width={100} /></li>
                <li><strong>{item.name}</strong></li>
                <li>⭐ {item.rating}</li>
                <li>${item.price_per_room}</li>
              </ul>
            ))
      }
    </div>
  );
}

export default ExampleLoaderSkeleton;
