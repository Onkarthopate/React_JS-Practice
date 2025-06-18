import '../styles/aboutus.css';
import img1 from '../images/user1.jpeg'
import img2 from '../images/user2.jpeg'
import img3 from '../images/user3.jpg'
import img4 from '../images/user4.jpg'


const testimonials = [
  {
    name: 'Alice Johnson',
    image: img1,
    message: 'The suite was luxurious and the service was top-notch. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Smith',
    image: img2,
    message: 'A very pleasant stay. Rooms were clean and staff was extremely helpful.',
    rating: 3.5,
  },
  {
    name: 'Sophia Lee',
    image: img3,
    message: 'Affordable and comfortable. Loved the deluxe room and amenities!',
    rating: 4
    ,
  },
   {
    name: 'David Kim',
    image: img4, 
    message: 'Excellent location and amazing food service. Would visit again!',
    rating: 2,
  },
];

function AboutUs() {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <p className="about-intro">
        Where comfort meets convenience.
      </p>

      <div className="about-description">
        <p>
          We aim to provide our guests with a seamless booking experience and exceptional hospitality. Our platform allows
          customers to find, compare, and reserve rooms that suit their preferences and budget.
        </p>
        <p>
          Whether you're traveling for business or leisure, we have the perfect space waiting for you. Our goal is to ensure
          your satisfaction and comfort throughout your stay.
        </p>
      </div>

      <h3 className="rating-title">What Our Guests Say</h3>
      <div className="testimonial-section">
        {testimonials.map((user, index) => (
          <div className="testimonial-card" key={index}>
            <img src={user.image} alt={user.name} className="user-image" />
            <h4>{user.name}</h4>
            <p className="user-message">"{user.message}"</p>
            <p className="user-rating">Rating: {'⭐'.repeat(user.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;