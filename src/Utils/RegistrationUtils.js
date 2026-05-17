const CART_KEY = 'eventRegistrationCart';

export function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addParticipantsToCart(eventId, adults, children) {
  const cart = getCart();
  const numericEventId = Number(eventId);

  const existing = cart.find((item) => item.eventId === numericEventId);

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