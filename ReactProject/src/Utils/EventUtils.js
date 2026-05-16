export const saveEvents = (events) => {
  localStorage.setItem('events', JSON.stringify(events));
};

export const getEvents = () => {
  const events = localStorage.getItem('events');
  return events ? JSON.parse(events) : [];
};

export const addPersonToEvent = (eventId) => {
  let events = getEvents();

  const existing = events.find((item) => item.id === eventId);

  if (existing) {
    existing.count += 1;
  } else {
    events.push({ id: eventId, count: 1 });
  }

  saveEvents(events);
};