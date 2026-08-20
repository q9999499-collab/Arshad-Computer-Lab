// Arshad Computer Lab - TypeScript foundation
// This file is intentionally isolated so the existing live JavaScript remains unchanged.

export interface Product {
  name: string;
  price: number | string;
  handle?: string;
}

export const formatPKR = (price: number): string =>
  `Rs. ${price.toLocaleString('en-PK')}`;

export const whatsappOrderUrl = (phone: string, message: string): string =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
