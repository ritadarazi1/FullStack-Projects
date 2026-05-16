import Image1 from '../assets/mseilha.jpg';
import Image2 from '../assets/georgia.jpg';
import Image3 from '../assets/ammiq.jpg';

const events = [
  {
    id: 1,
    title: "Darb El Mseilha",
    desc: "Hike",
    price: 30,
    img: Image1,
    location: "Batroun, Lebanon",
    difficulty: "Moderate",
    eventDate: "2026-06-15",
    eventTime: "8:00 AM",
    eventDuration: "1 day",
    maxParticipants: 20,
    details:
      "Enjoy a beautiful hike around Darb El Mseilha with scenic views, nature trails, and historical surroundings."
  },
  {
    id: 2,
    title: "Ammiq Wetlands",
    desc: "Full Day Event",
    price: 50,
    img: Image3,
    location: "Bekaa Valley, Lebanon",
    difficulty: "Easy",
    eventDate: "2026-06-22",
    eventTime: "9:00 AM",
    eventDuration: "Full day",
    maxParticipants: 25,
    details:
      "Explore the peaceful Ammiq Wetlands, one of Lebanon’s most beautiful nature reserves, perfect for walking, bird watching, and relaxing."
  },
  {
    id: 3,
    title: "A week in Georgia",
    desc: "Guided Trip",
    price: 1200,
    img: Image2,
    location: "Georgia",
    difficulty: "Medium",
    eventDate: "2026-07-10",
    eventTime: "6:00 AM",
    eventDuration: "7 days",
    maxParticipants: 15,
    details:
      "A guided international trip to Georgia including nature, culture, mountains, sightseeing, and unforgettable outdoor experiences."
  }
];

export default events;