// Arshad Computer Lab - TypeScript foundation
// This file is intentionally isolated so the existing live JavaScript remains unchanged.
export const formatPKR = (price) => `Rs. ${price.toLocaleString('en-PK')}`;
export const whatsappOrderUrl = (phone, message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
