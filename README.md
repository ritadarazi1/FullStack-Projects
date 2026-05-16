# Hike Me Up

Hike Me Up is a React + Vite front-end project for a hiking, trips, outdoor events, and travel company.

The app allows users to browse events, view event details, filter available events, and register participants for trips using local storage.

## Features

- Home page with event cards
- Event details page
- About Us page
- Contact Us page
- Registration form page
- React Router navigation
- Availability filtering
- Local Storage registration cart
- Participant capacity validation
- Fully booked logic based on registered participants
- Responsive outdoor-themed UI

## Tech Stack

- React
- Vite
- React Router DOM
- JavaScript
- CSS
- Local Storage

## Pages

### Home

Displays all available trips and events as cards.

Each card includes:

- Event title
- Event type
- Price
- Event date
- Event time
- Event duration
- Registered participants
- Availability status

### Event Details

Displays full event information:

- Title
- Description
- Location
- Date
- Time
- Duration
- Difficulty
- Price
- Registered participants
- Maximum participants
- Availability status

If the event is not fully booked, the user can click **Register Now**.

### Registration Form

The registration form includes:

- Full name
- Adult participant number
- Child participant number ages 3-12
- Email
- Phone number
- Special requests

When the form is submitted, the app updates local storage with:

- Event ID
- Adult participant count
- Child participant count

If the selected number of participants exceeds the remaining places, the app shows an error message.

### Contact Us

Includes:

- Phone number
- Email
- WhatsApp link
- Instagram link
- Facebook link
- Google Maps location
- Contact form

## Local Storage

The project uses local storage to simulate a front-end cart before adding a backend.

Local storage key:

```txt
eventRegistrationCart