const CART_KEY = 'eventRegistrationCart';

export function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getRegisteredCount(cart, eventId) {
  const registration = cart.find(
    (item) => item.eventId === Number(eventId)
  );

  if (!registration) return 0;

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

  const newAdults = Number(adults);
  const newChildren = Number(children);
  const newTotal = newAdults + newChildren;

  if (currentTotal + newTotal > maxParticipants) {
    throw new Error(`Only ${maxParticipants - currentTotal} place(s) remaining.`);
  }

  if (existing) {
    existing.adults += newAdults;
    existing.children += newChildren;
  } else {
    cart.push({
      eventId: numericEventId,
      adults: newAdults,
      children: newChildren
    });
  }

  saveCart(cart);
  return cart;
}