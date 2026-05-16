import Image1 from '../assets/mseilha.jpg';
import Image2 from '../assets/georgia.jpg';
import Image3 from '../assets/ammiq.jpg';

const events = [
  {
    id: 1,
    title: "Darb El Mseilha",
    desc: "Hike",
    price: 30,
    isAvailable: true,
    img: Image1,
    location: "Batroun, Lebanon",
    duration: "1 day",
    difficulty: "Moderate",
    details:
      "Enjoy a beautiful hike around Darb El Mseilha with scenic views, nature trails, and historical surroundings."
  },
  {
    id: 2,
    title: "Ammiq Wetlands",
    desc: "Full Day Event",
    price: 50,
    isAvailable: true,
    img: Image3,
    location: "Bekaa Valley, Lebanon",
    duration: "Full day",
    difficulty: "Easy",
    details:
      "Explore the peaceful Ammiq Wetlands, one of Lebanon’s most beautiful nature reserves, perfect for walking, bird watching, and relaxing."
  },
  {
    id: 3,
    title: "A week in Georgia",
    desc: "Guided Trip",
    price: 1200,
    isAvailable: false,
    img: Image2,
    location: "Georgia",
    duration: "7 days",
    difficulty: "Medium",
    details:
      "A guided international trip to Georgia including nature, culture, mountains, sightseeing, and unforgettable outdoor experiences."
  }
];

export default events;