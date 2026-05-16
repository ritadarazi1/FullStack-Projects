const CART_KEY = 'eventRegistrationCart';

export function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getEventRegistration(cart, eventId) {
  return cart.find((item) => item.eventId === Number(eventId));
}

export function getRegisteredCount(cart, eventId) {
  const registration = getEventRegistration(cart, eventId);

  if (!registration) {
    return 0;
  }

  return registration.adults + registration.children;
}

export function isEventFullyBooked(cart, eventId, maxParticipants) {
  return getRegisteredCount(cart, eventId) >= maxParticipants;
}

export function addParticipantsToCart(eventId, adults, children, maxParticipants) {
  const cart = getCart();
  const numericEventId = Number(eventId);

  const existing = cart.find((item) => item.eventId === numericEventId);

  const currentAdults = existing ? existing.adults : 0;
  const currentChildren = existing ? existing.children : 0;
  const currentTotal = currentAdults + currentChildren;
  const newTotal = Number(adults) + Number(children);

  if (currentTotal + newTotal > maxParticipants) {
    throw new Error(
      `Not enough places available. Only ${maxParticipants - currentTotal} spot(s) remaining.`
    );
  }

  if (existing) {
    existing.adults += Number(adults);
    existing.children += Number(children);
  } else {
    cart.push({
      eventId: numericEventId,
      adults: Number(adults),
      children: Number(children)
    });
  }

  saveCart(cart);
  return cart;
}